var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Shopping", { useNewUrlParser: true });

var products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1162px-Banana-Single.jpg',
    title: 'Banana ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    price: 10
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg',
    title: 'Apple ',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    price: 8
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Green_grape_fruit.jpg',
    title: 'Grapes ',
    description: 'ex ea commodo consequat. Duis aute irure dolor ',
    price: 6
  }),
  new Product({
    imagePath: 'https://cdn.pixabay.com/photo/2016/04/27/14/58/fig-1356770_960_720.jpg',
    title: 'Figs ',
    description: 'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ',
    price: 4
  }),
  new Product({
    imagePath: 'https://www.goodfreephotos.com/albums/plants/orange-fruit-picture.jpg',
    title: 'Orange ',
    description: 'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit',
    price: 8
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pomegranate_%28fruit%29.jpg',
    title: 'Pomegranate ',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ',
    price: 10
  })
];

var done = 0;
for (var i=0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if (done === products.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
