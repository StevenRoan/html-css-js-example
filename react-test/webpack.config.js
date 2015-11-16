module.exports = {
  devServer: {
    publicPath: "/build",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 600
    },
    hot: true
  },
  entry: {
    app: ["./src/index.jsx"],
  },
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
      loaders: ["react-hot", "babel-loader"],
    }]
  }
};
