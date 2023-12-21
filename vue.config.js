module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index']
    },
    'aboutus': {
      entry: './src/pages/About/main.js',
      template: 'public/aboutus.html',
      title: 'About us',
      chunks: [ 'chunk-vendors', 'chunk-common', 'aboutus']
    },
    'cart': {
      entry: './src/pages/Cart/main.js',
      template: 'public/cart.html',
      title: 'Cart',
      chunks: [ 'chunk-vendors', 'chunk-common', 'cart']
    },
    'catalog': {
      entry: './src/pages/Catalog/main.js',
      template: 'public/catalog.html',
      title: 'Catalog',
      chunks: [ 'chunk-vendors', 'chunk-common', 'catalog']
    },
    'delivery': {
      entry: './src/pages/Delivery/main.js',
      template: 'public/delivery.html',
      title: 'Delivery',
      chunks: [ 'chunk-vendors', 'chunk-common', 'delivery']
    },
  }
}
