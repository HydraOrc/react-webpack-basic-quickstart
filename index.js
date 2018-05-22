import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

const countries = [
	{
		_id: 'united-states',
		name: 'United States'
	},

	{
		_id: 'ukraine',
		name: 'Ukraine'
	},
];

ReactDOM.render(
  <Main countries={countries} />,
  document.getElementById('react-root')
);