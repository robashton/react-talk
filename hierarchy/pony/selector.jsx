var React = require('react')

module.exports = React.createClass({
  handleChange: function(e) {
    if(this.props.onChange)
      this.props.onChange(e.target.value)
  },
  render: function() {
    return <select onChange={this.handleChange}>
      <option value="pinkie">pinkie</option>
      <option value="rainbow dash">rainbow dash</option>
      <option value="rarity">rarity</option>
      <option value="apple jack">apple jack</option>
      <option value="twilight sparkle">twilight sparkle</option>
      <option value="fluttershy">fluttershy</option>
    </select>
  }
})

