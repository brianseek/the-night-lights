var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var hpBox = new SimpleLightbox({elements: '.lb-fig a'});
var ppBox = new SimpleLightbox({elements: '.photo-page .photo a'});
if (viewportWidth < 450) {
  hpBox.destroy();
  ppBox.destroy();
}