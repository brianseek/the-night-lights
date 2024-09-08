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
  var selectedFont = sessionStorage.getItem('font-type');
  var sizeSwitch = document.getElementsByClassName('font-size-toggle')[0];
  var fontSwitch = document.getElementsByClassName('font-type-toggle')[0];
  var body = document.getElementsByTagName('body')[0];
  var otherValue;
  function changeValue (oldValue, newValue) {
    body.classList.add(newValue);
    body.classList.remove(oldValue);
  };
  if (selectedSize) {
    if (selectedSize === 'font-size--default') {
      otherValue = 'font-size--large';
    } else {
      otherValue = 'font-size--default';
    }
    changeValue(otherValue, selectedSize);
  };
  if (selectedFont) {
    if (selectedFont === 'font-type--default') {
      otherValue = 'font-type--od';
    } else {
      otherValue = 'font-type--default';
    }
    changeValue(otherValue, selectedFont);
  };
  sizeSwitch.addEventListener('click', function() {
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
    changeValue(oldSize, newSize);
  });
  fontSwitch.addEventListener('click', function() {
    var newType = '';
    var oldType = '';
    if (body.classList.contains('font-type--default')) {
      newType = 'font-type--od'
      oldType = 'font-type--default'
    } else if (body.classList.contains('font-type--od')) {
      newType = 'font-type--default'
      oldType = 'font-type--od'
    };
    sessionStorage.setItem('font-type', newType);
    changeValue(oldType, newType);
  });
  var helpSwitch = document.getElementsByClassName("font-help")[0];
  var helpContent = document.getElementsByClassName("a11y-help")[0];
  helpSwitch.addEventListener("click", function() {
    this.classList.toggle("active");
    if (helpContent.style.maxHeight){
      helpContent.style.marginTop = 0;
      helpContent.style.maxHeight = null;
      helpContent.style.overflow = 'hidden';
    } else {
      helpContent.style.marginTop = '24px';
      helpContent.style.overflow = 'visible';
      helpContent.style.maxHeight = helpContent.scrollHeight + "px";
    } 
  });
  
});
