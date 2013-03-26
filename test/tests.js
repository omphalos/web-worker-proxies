describe('web worker proxies', function() {

  var worker
    , proxy;

  beforeEach(function() {

    worker = new Worker('test-worker.js')
    proxy = worker.proxy()
  })

  it('should execute a function remotely', function() {

    proxy('add')(2,3, function callback(err, result) {

      expect(err).toBe(null)
      expect(result).toBe(5)
    })
  })

  it('should propagate errors', function() {

    proxy('add')(2,3, function callback(err, result) {

      expect(err).toBe(null)
      expect(result).toBe(5)
    })
  })

  it('should handle function calls without a callback', function() {

    proxy('increment')()

    proxy('increment')(function(err, result) {

      expect(err).toBe(null)
      expect(result).toBe(2)
    })
  })
})
