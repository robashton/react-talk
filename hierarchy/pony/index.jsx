var React = require('react')
  , Selector = require('./selector.jsx')

module.exports = React.createClass({
  componentWillMount: function() {
    this.setState({pony: "pinkie"})
  },
  ponyImageUrl: function() {
    return "/" + this.state.pony + ".png"
  },
  handlePonyChange: function(name) {
    this.setState({pony: name})
  },
  render: function() {
    return <div>
              <p>I am a pony and my name is {this.state.pony}</p>
              <img width="300" src={this.ponyImageUrl()} />
              <Selector value={this.state.pony} onChange={this.handlePonyChange} />
           </div>
  }
})

