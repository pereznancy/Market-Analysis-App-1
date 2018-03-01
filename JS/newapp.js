'use strict';
// Product Constructor

var Product = function (name, url) {
    this.name = name;
    this.url = url;
    this.clicks = 0;
};

function randomProductUrl (){
    
    var random = Math.floor(Math.random() * productsArray.length);
    return productsArray[random].url;
}

var randomProductDisplay = function (){
    var urlArray = [];
    var productBag = document.getElementById('bag');
    var img = document.createElement('img');
    img.setAttribute("src", randomProductUrl());
    productBag.appendChild(img);
    
    while (urlArray.length != 3) {
        var currentUrl = randomProductUrl();
        if (urlArray.indexOf(currentUrl) == -1){
            urlArray.push(currentUrl);
        }
    };
    console.log(urlArray);

    for (let i = 0; i < urlArray.length; i++) {

    }
}


var productsArray = [];
productsArray.push(
    new Product('r2d2 bag', 'IMG/bag.jpg'),
    new Product('banana slicer', 'IMG/banana.jpg'),
    new Product('toeless boots', 'IMG/boots.jpg'),
    new Product('odd chair', 'IMG/chair.jpg'),
    new Product('creature', 'IMG/cthulhu.jpg'),
    new Product('dragon spam', 'IMG/dragon.jpg'),
    new Product('pentencil', 'IMG/pen.jpg'),
    new Product('pizza scissors', 'IMG/scissors.jpg'),
    new Product('shark sleeping bag', 'IMG/shark.jpg'),
    new Product('baby broom', 'IMG/sweep.jpg'),
    new Product('unicorn spam', 'IMG/unicorn.jpg'),
    new Product('usb alien', 'IMG/usb.jpg'),
    new Product('repouring can', 'IMG/water_can.jpg'),
    new Product('undrinkable wine glass', 'IMG/wine_glass.jpg')
);

// window.addEventListener('load');



    
