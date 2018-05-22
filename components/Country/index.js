import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Country extends Component {
	propTypes = {
		item: PropTypes.object,
	}

	render() {
		const { item } = this.props;

	    return (
	    	<div>
	    		{item.name}
	    	</div>
	   	);
	}
};

export default Country;