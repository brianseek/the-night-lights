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

document.addEventListener("DOMContentLoaded", function() {
  var fontSwitch = document.getElementsByClassName('font-size-toggle')[0];
  var body = document.getElementsByTagName('body')[0];

  fontSwitch.addEventListener('click', function() {
    if (body.classList.contains('font-size--default')) {
      body.classList.remove('font-size--default');
      body.classList.add('font-size--large');
    } else {
      body.classList.remove('font-size--large');
      body.classList.add('font-size--default');
    }
  });
});
