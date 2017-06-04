var App = React.createClass({
	render: function() {
  return<div>
  <label> Enter Your Name:</label>
  </div>;
  }
});


ReactDOM.render(
<App />,
document.getElementById('container')
);

Second code snippet
var App = React.createClass({
	getInitialState: function() {
  	return { name: this.props.name };
  },

	updateUsername: function(name) {
		this.setState({ name: name });
  },

	render: function() {
  	return (
    	<div>
      	<h1>{this.state.name}</h1>
   			<SetUsername handleClick={ this.updateUsername } />
   		</div>
    )
  }
});

var SetUsername = React.createClass({
	handleClick: function() {
  	var newUsername = "Cara"
    this.props.handleClick(newUsername);
  },

	render: function() {
  	return (
    	<div>
      	<label>Enter your name:</label>
        <input />
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    )
  }
});

ReactDOM.render(<App name="Anni" />, document.getElementById('container'));
