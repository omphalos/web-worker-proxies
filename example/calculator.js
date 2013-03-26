importScripts('../web-worker-proxies.js')

this.proxy = {

  add: function(x, y) {
    return x + y
  },

  multiply: function(x, y) {
    return x * y;
  }

}
