import React from 'react';
import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'

// import { Container } from './styles';

export default function Error() {
	return (
		<>
			<Hero>
				<Banner title="404" subtitle="page not found">
					<Link to="/" className="btn-primary">return home</Link>
				</Banner>
			</Hero>
		</>
	);
}
