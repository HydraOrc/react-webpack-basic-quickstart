import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ShowCount extends PureComponent {
	static propTypes = {
		count: PropTypes.number,
	}

	render() {
		const { count } = this.props;

	    return (
	    	<div>
	    		Count: {count}
	    	</div>
	   	);
	}
};

export default ShowCount;