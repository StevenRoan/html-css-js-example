// Tranform to ex2015 in runtime
require('babel-core/register')({
  presets: ['es2015', 'stage-0'],
  plugins: ['transform-runtime'],
})
require('./server')
