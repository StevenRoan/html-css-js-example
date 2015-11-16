# Progress
* Working on tutorial by my self

# Learned
* Use react to write a basic comment board: v
* Use babel command to compile jsx to js: v
* Use webpack with babel loader to handle the dependencies and compilation. [reference](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement)
* Use webpack watcher
* Webpack dev server (many small diffculties inside)
 * The newly compiled data is in memory not fs.
 * `publicPath`: the public path means the path prefix which can be **ignored**
  * E.g.: When `https://127.0.0.1:8080/build/index.js` with public path `/build`, only `/index.js` will be used to append to `webpack.config.output.path`.
    * If used `/` as publicPath -> we use `build/index.js`. With `output.path=__dirnam+'/build'`, the actual reading path willbe `.../build/build/index.js` which is the actual data in fs.
  * When using CLI to launch the webpack-dev-server, it uses the `webpack.config.devserver`

# Todo
* work with listing a fix data set

# Detected Problem
* express server terminated will cause an console error in the ajax request. This might implies that the connection is not killed.(POST or GET?)
* The webpack-dev-server api mode still has some problems.

# Solved Problem
* `webpack --watch` has some problem (in OSX maybe?) ([issue](https://github.com/webpack/webpack/issues/675)). Babel watch is fine
 * Use webpack api instead of cli, and set the mode to polling fix this problem.
 * In `CLI`, use `webpack --watch --watch-poll` can fix
 * Understand the webpack dev server's setting, such as `publicPath`, `hot`, `inline`