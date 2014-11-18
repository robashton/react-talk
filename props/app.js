var ready = require('domready')
  , Pony = require('./pony/index.jsx')
  , React = require('react')

ready(function() {
  var container = document.getElementById('container')
  React.renderComponent(Pony({name: "pinkie pie"}), container)
})

