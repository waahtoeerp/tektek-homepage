function applyTheme(theme) {
  const root = document.documentElement.style;
  for (const [name, value] of Object.entries(theme.colors)) root.setProperty(`--${name}`, value);
  root.setProperty("--font-heading", theme.font.heading);
  root.setProperty("--font-body", theme.font.body);
  root.setProperty("--font-display", theme.font.display);
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
  const logo = el("img", "logo");
  logo.src = "/brand/tektek-logo.svg";
  logo.alt = texts.title;
  const conversation = el("div", "conversation");
  for (const line of texts.lines) conversation.append(el("p", "", line));
  section.append(conversation, logo);
  return section;
}

const RENDERERS = {
  hero: (key, texts) => renderHero(texts),
};

async function init() {
  const config = await (await fetch("/config.json")).json();
  applyTheme(config.theme);

  const page = config.pages[document.body.dataset.page];
  const texts = config.texts;

  document.title = texts.site.title;
  document.querySelector('meta[name="description"]').setAttribute("content", texts.site.description);

  const main = document.getElementById("content");
  for (const section of page.sections) {
    main.append(RENDERERS[section.type](section.key, texts.home[section.key]));
  }

  document.getElementById("footer").append(
    el("p", "", `© ${new Date().getFullYear()} ${texts.footer.rights}`),
  );
}

init();
