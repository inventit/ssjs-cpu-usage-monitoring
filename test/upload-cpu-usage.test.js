var nodeUnit = require('nodeunit');
var sinon = require('sinon');
var script = require('path').resolve('./src/upload-cpu-usage.js');
var moat = require('moat');

module.exports = nodeUnit.testCase({

  setUp: function(callback) {
    require.cache[script] = null;
    callback();
  },

  tearDown: function(callback) {
    callback();
  },

  'Upload CPU usage, successful case' : function(assert) {
    var context = moat.init(sinon),
        session = context.session;

    var obj = {"CpuUsage": {"user": 57.666664,
                             "nice": 0.000000,
                             "system": 3.333333,
                             "idel": 39.000000,
                             "timestamp": 1426212672434}};
    context.setObjects(obj);

    assert.doesNotThrow(function() {
      require(script);
    });

    assert.done();
  }

});
