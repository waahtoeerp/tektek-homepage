function applyTheme(theme) {
  const root = document.documentElement.style;
  for (const [name, value] of Object.entries(theme.colors)) root.setProperty(`--${name}`, value);
  root.setProperty("--font-heading", theme.font.heading);
  root.setProperty("--font-body", theme.font.body);
  root.setProperty("--font-size", theme.font.size);
  root.setProperty("--radius", theme.layout.radius);
  root.setProperty("--gap", theme.layout.gap);
  root.setProperty("--max-width", theme.layout.maxWidth);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderHero(texts) {
  const section = el("section", "hero");
  section.id = "hero";
  section.append(
    el("p", "eyebrow", texts.eyebrow),
    el("h1", "", texts.title),
    el("p", "lead", texts.lead),
  );
  const cta = el("a", "button", texts.cta);
  cta.href = `#${texts.ctaTarget}`;
  section.append(cta);
  return section;
}

function renderCards(key, texts) {
  const section = el("section", "cards");
  section.id = key;
  section.append(el("h2", "", texts.title));
  const grid = el("div", "card-grid");
  for (const item of texts.items) {
    const card = el("article", "card");
    card.append(el("h3", "", item.title), el("p", "", item.body));
    grid.append(card);
  }
  section.append(grid);
  return section;
}

function renderText(key, texts) {
  const section = el("section", "text-block");
  section.id = key;
  section.append(el("h2", "", texts.title), el("p", "", texts.body));
  return section;
}

function renderContact(key, texts) {
  const section = el("section", "contact");
  section.id = key;
  section.append(el("h2", "", texts.title), el("p", "", texts.body));
  const list = el("ul", "contact-list");
  list.append(
    el("li", "", texts.businessId),
    el("li", "", texts.phone),
  );
  const mail = el("li");
  const link = el("a", "", texts.email);
  link.href = `mailto:${texts.email}`;
  mail.append(link);
  list.append(mail);
  section.append(list);
  return section;
}

const RENDERERS = {
  hero: (key, texts) => renderHero(texts),
  cards: renderCards,
  text: renderText,
  contact: renderContact,
};

function renderNav(texts, sections) {
  const nav = document.getElementById("nav");
  for (const section of sections) {
    if (section.type === "hero") continue;
    const link = el("a", "", texts.nav[section.key]);
    link.href = `#${section.key}`;
    nav.append(link);
  }
}

async function init() {
  const config = await (await fetch("/api/config")).json();
  applyTheme(config.theme);

  const page = config.pages[document.body.dataset.page];
  const texts = config.texts;

  document.title = texts.site.title;
  document.querySelector('meta[name="description"]').setAttribute("content", texts.site.description);

  renderNav(texts, page.sections);

  const main = document.getElementById("content");
  for (const section of page.sections) {
    const render = RENDERERS[section.type] ?? RENDERERS[section.key];
    main.append(render(section.key, texts.home[section.key]));
  }

  document.getElementById("footer").append(
    el("p", "", `© ${new Date().getFullYear()} ${texts.footer.rights}`),
  );
}

init();
