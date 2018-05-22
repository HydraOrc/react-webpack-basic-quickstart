import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hello from '../Hello';
import ShowCount from '../ShowCount';

class Country extends Component {
	state = {
		count: 0
	}

	increase = () => {
		const { count } = this.state;

		this.setState({
			count: count + 1,
		});
	}

	decrease = () => {
		const { count } = this.state;

		if (count === 0) {
			return;
		}

		this.setState({
			count: count - 1,
		})
	}

	render() {
		const { count } = this.state;

		const hello = [];
		for (let i = 0; i < count; i++) {
			hello.push(<Hello key={i} />);
		}

	    return (
	    	<div>

	    		<ShowCount count={count} />

	    		<button onClick={this.increase}>
	    			Increase it!
	    		</button>

	    		<button onClick={this.decrease}>
	    			Decrease it!
	    		</button>

	    		{hello}

	    	</div>
	   	);
	}
};

export default Country;