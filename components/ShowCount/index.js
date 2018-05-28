import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class ShowCount extends PureComponent {
	static propTypes = {
		count: PropTypes.number,
	}

	state = {
		color: 'orange'
	}

	onClick = () => {
		this.setState({color:'blue'})
	}

	render() {
		const { count } = this.props;

	    return (
	    	<div 
		    	style={{
		    		color: this.state.color
		    	}}
		    	onClick={this.onClick}
	    	>
	    		Count: {count}
	    	</div>
	   	);
	}
};

export default ShowCount;