var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var hpBox = new SimpleLightbox({elements: '.lb-fig a'});
var ppBox = new SimpleLightbox({elements: '.photo-page .photo a'});
if (viewportWidth < 450) {
  hpBox.destroy();
  ppBox.destroy();
}
var encEmail = "YnJpYW4uc2VlaytuLWxAZ21haWwuY29t";
const form = document.getElementById("contact");
if (form) {
  form.setAttribute("href", "mailto:".concat(atob(encEmail)));
}
document.addEventListener("DOMContentLoaded", function() {
  var selectedSize = sessionStorage.getItem('font-size');
  var fontSwitch = document.getElementsByClassName('font-size-toggle')[0];
  var body = document.getElementsByTagName('body')[0];
  var otherSize;
  function changeText (oldSize, newSize) {
    body.classList.add(newSize);
    body.classList.remove(oldSize);
  };
  if (selectedSize) {
    if (selectedSize === 'font-size--default') {
      otherSize = 'font-size--large';
    } else {
      otherSize = 'font-size--default';
    }
    changeText(otherSize, selectedSize);
  };
  fontSwitch.addEventListener('click', function() {
    var newSize = '';
    var oldSize = '';
    if (body.classList.contains('font-size--default')) {
      newSize = 'font-size--large'
      oldSize = 'font-size--default'
    } else if (body.classList.contains('font-size--large')) {
      newSize = 'font-size--default'
      oldSize = 'font-size--large'
    };
    sessionStorage.setItem('font-size', newSize);
    changeText(oldSize, newSize);
  });
});
