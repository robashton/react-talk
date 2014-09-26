var React = require('react')

module.exports = React.createClass({
  componentWillMount: function() {
    this.setState({pony: "pinkie"})
  },
  ponyImageUrl: function() {
    return "/" + this.state.pony + ".png"
  },
  render: function() {
    return <div>
              <p>I am a pony and my name is {this.state.pony}</p>
              <img width="300" src={this.ponyImageUrl()} />
           </div>
  }
})

