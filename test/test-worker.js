importScripts('../web-worker-proxies.js')

var increment = 0

this.proxy = {

  add: function add(x, y) { return x + y },

  fail: function fail() { throw 'error' },

  increment: function increment() { return ++count }

}
