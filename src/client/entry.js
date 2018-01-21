//entry file

//libs
window.$ = require('jquery')
window.store = require('store')

//includes all files from certain folder
function requireAll(r) { return r.keys().forEach(r) }

//front end
requireAll(require.context('./style/', true, /\.sass$/))
requireAll(require.context('./js/', true, /\.js$/))

//static files
// require.context("./", true, /\.(php)$/) //use regExp instead
// require.context("./assets/music/", true, /\..*$/)

