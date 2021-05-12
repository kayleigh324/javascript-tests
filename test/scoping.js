
  function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      return callback();
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      Module()
      return this.foo;
    };

    Module.prototype.req = function() {
      return request(this.method);
    };

    console.log(mod.req()).toBe('bar');
