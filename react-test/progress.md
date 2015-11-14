# Progress
* Working on tutorial by my self

# Learned
* Use react to write a basic comment board: v
* Use babel command to compile jsx to js: v
* Use webpack with babel loader to handle the dependencies and compilation. [reference](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement)

# Todo
* webpack + babel
* work with listing a fix data set

# Detected Problem
* express server terminated will cause an console error in the ajax request. This might implies that the connection is not killed.(POST or GET?)
* `webpack --watch` has some problem ([issue](https://github.com/webpack/webpack/issues/675)). Babel watch is fine
 * Use webpack api instead of cli, and set the mode to polling fix this problem.
 * In `CLI`, use `webpack --watch --watch-poll` can fix