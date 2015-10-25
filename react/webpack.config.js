module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + '/build',
    filename: "index.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }]
  }
};
