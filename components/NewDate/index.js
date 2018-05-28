import React, { Component } from 'react';

class NewDate extends Component {
	constructor(props){
		super(props);
		
		setInterval(this.changedate, 1000);
	}

	state = {
		date: new Date().toLocaleString()
	}

	changedate = () => {
		this.setState({
			date: new Date().toLocaleString()
		})
	}

	render() {
	    return (
	    	<div>{this.state.date}</div>
	   	);
	}
};

export default NewDate;