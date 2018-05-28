import React, { Component } from 'react';

class Hello extends Component {
	state = {
		hello: 'Hello, Ania!'
	}

	onClick = () => {
		this.setState({
			hello: this.truncateString(this.state.hello, 8)
		})
	}

	truncateString(str, num) {
  		if(str.length > num) {
			if(num > 3){
 				str = str.slice(0, num-3)+ '...';
			} else {
				str = str.slice(0, num)+ '...';
			}
		}
		
        return str;
	}

	render() {
	    return (
	    	<h1 onClick={this.onClick}>{this.state.hello}</h1>
	   	);
	}
};

export default Hello;