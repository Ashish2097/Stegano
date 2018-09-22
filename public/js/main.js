

var imgcanvas = null;
var imgcanvas2 = null;
var fileinput = null;
var fileinput1 = null;
var msgimg = null;
var hidedimg = null;
var imgcanvas3 = null;
var imgcanvas4 = null;
var orgi = null;

var w1 = null;
var h1 = null;

function uplode() {
  imgcanvas = document.getElementById('d1');
  fileinput = document.getElementById('finput');

  var image = new SimpleImage(fileinput);
  msgimg = image;

  image.drawTo(imgcanvas);
}

function uplode1() {
  imgcanvas2 = document.getElementById('d2');
  fileinput1 = document.getElementById('finput1');

  var image = new SimpleImage(fileinput1);
  hidedimg = image;

  image.drawTo(imgcanvas2);
}

function enc() {
  imgcanvas3 = document.getElementById('d3');
  orgi = new SimpleImage(msgimg);
  console.log(orgi.getPixel(0, 0).getGreen());
  var hided = new SimpleImage(hidedimg);
  console.log(hided.getPixel(0, 0).getGreen());
  var w = orgi.getWidth();
  var h = orgi.getHeight();
  w1 = hided.getWidth();
  h1 = hided.getHeight();
  for (var pixel of orgi.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var hidedg = 0;
    var hidedr = 0;
    var hidedb = 0;
    if (x < w && x < w1 && y < h && y < h1) {
      var hidedpixel = hided.getPixel(x, y);
      hidedg = hidedpixel.getGreen();
      hidedr = hidedpixel.getRed();
      hidedb = hidedpixel.getBlue();
    }

    var pixelg = pixel.getGreen();
    var pixelr = pixel.getRed();
    var pixelb = pixel.getBlue();

    var newg = (pixelg & 240) + (hidedg >> 4);
    var newb = (pixelr & 240) + (hidedr >> 4);
    var newr = (pixelb & 240) + (hidedb >> 4);

    pixel.setGreen(newg);
    pixel.setBlue(newb);
    pixel.setRed(newr);
  }
  console.log(orgi.getPixel(0, 0).getGreen());
  orgi.drawTo(imgcanvas3);
}

function dec() {
  imgcanvas4 = document.getElementById('d4');
  var decimg = orgi;

  for (var pixel of decimg.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var pixelg = pixel.getGreen();
    var pixelr = pixel.getRed();
    var pixelb = pixel.getBlue();

    pixelb = pixelb & 15;
    pixelb = pixelb << 4;
    pixelg = pixelg & 15;
    pixelg = pixelg << 4;
    pixelr = pixelr & 15;
    pixelr = pixelr << 4;

    pixel.setGreen(pixelg);
    pixel.setBlue(pixelb);
    pixel.setRed(pixelr);
  }
  console.log(decimg.getPixel(0, 0).getGreen());
  decimg.drawTo(imgcanvas4);
}

var k = 135;
k = k & 15;
k = k << 4;
console.log(k);
