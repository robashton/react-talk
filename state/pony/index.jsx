var React = require('react')

module.exports = React.createClass({
  componentWillMount: function() {
    this.setState({name: "pony"})
  },
  render: function() {
    return <p>I am a pony and my name is {this.state.name}</p>
  }
})

