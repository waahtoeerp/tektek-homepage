// Adds the shared footer to every page. A new page gets it by including this one script:
//   <script src="/site.js" defer></script>
// The page can have a <footer id="footer"></footer>; if it doesn't, one is added at the end of <body>.
(function () {
  const year = new Date().getFullYear();

  const footer = document.getElementById("footer") || document.createElement("footer");
  footer.id = "footer";
  footer.className = "site-footer";
  footer.innerHTML = "";

  const line = document.createElement("p");
  line.textContent = `© ${year} tek tek oy. Kaikki oikeudet pidätetään. `;

  const privacy = document.createElement("a");
  privacy.href = "/tietosuoja.html";
  privacy.textContent = "Tietosuojaseloste";

  line.append("· ", privacy);
  footer.append(line);

  if (!footer.isConnected) document.body.append(footer);
})();
