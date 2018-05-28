import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Country extends Component {
	propTypes = {
		item: PropTypes.object,
	}

	constructor(props){
		super(props);
		
		document.addEventListener('contextmenu', this.clickAndRun)
	}

	state = {
		country: this.props.item.name
	}

	clickAndRun = (ev) => {
		ev.preventDefault();
		this.setState({
			country: this.reverseString(this.state.country)
		})
	}

	reverseString(str) {
    	var splited = str.split('');
	    var reversed = splited.reverse();
	    var joined = reversed.join('');
	    
	    return joined;
    }

	render() {

	    return (
	    	<div>
	    		{this.state.country}
	    	</div>
	   	);
	}
};

export default Country;