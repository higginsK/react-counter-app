var Counter = React.createClass({
	getInitialState: function() {
  	return { count: 0, inputFieldValue: '' };
  },

	increaseCount: function() {
  // add validation on the inputs ----> if the inputFieldValue is NOT a number, don't add it to the count
  	const numberToAdd = parseInt(this.state.inputFieldValue);
  	this.setState({ count: this.state.count + numberToAdd });
  },

	render: function() {
  	return (
    	<div>
      	<h2>Count: {this.state.count}</h2>
        <input onChange={ (event) => { this.setState({ inputFieldValue: event.target.value}) } } />
        <button onClick={ this.increaseCount } >Add to count</button>
			</div>
    )
  }
});

ReactDOM.render(
	<Counter />,
  document.getElementById('container')
);
