var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var hpBox = new SimpleLightbox({elements: '.lb-fig a'});
var ppBox = new SimpleLightbox({elements: '.photo-page .photo a'});
if (viewportWidth < 450) {
  hpBox.destroy();
  ppBox.destroy();
}
var encEmail = "YnJpYW4uc2VlaytuLWxAZ21haWwuY29t";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));