/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Página /index
*/

import React 	from 'react';
import Layout 	from '../components/Layout';
import Aside 	from '../components/aside';
import Content 	from '../components/content';

const PageIndex = () => {

	return(
		<Layout title = "Core CSS">
			<div className="page-home row-responsive">
				<Aside />
				<Content />
			</div>
		</Layout>
	);

};

export default PageIndex;