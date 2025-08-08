import React from 'react';
import Card from './Card';

import {IRobot} from '../reducers';

interface ICardListProps {
	robots: IRobot[];
}

const CardList: React.FC<ICardListProps> = ({robots}) => {
	return(
		<div>
		    {
		    	robots.map((user, i) => {
					return (
						<Card key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
						/>
						);
				})
		    }
	    </div>
	);
}

export default CardList;