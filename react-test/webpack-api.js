var webpack = require("webpack");
var conf = require('./webpack.config.js');

// returns a Compiler instance
var compiler = webpack(conf);

// compiler.run(function(err, stats) {
//   console.log(err)
//   console.log(stats)
// });
// // or
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
  if (err) {
    return console.log(err)
  }
  console.log("-----Done----");
  console.log("hash %s", stats.hash);
});