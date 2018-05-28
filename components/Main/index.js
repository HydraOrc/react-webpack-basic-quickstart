import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Counter from '../Counter';
import Country from '../Country';
import Hello from '../Hello';
import NewDate from '../NewDate';


class Main extends Component {
	static propTypes = {
		countries: PropTypes.arrayOf(PropTypes.object),
	}

	render() {
		// const { countries, users, groups } = this.props;

		const countries = this.props.countries;

	    return (
	    	<div className={'main'}>

	    		<Hello />

	    		<NewDate />

	    		{map(countries, (item) => (
	    			<Country key={item._id} item={item} />
	    		))}

	    		<br />

	    		<Counter />

	    	</div>
	   	);
	}
};

export default Main;