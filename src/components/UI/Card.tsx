// reusable component for card
import React, {ReactNode} from 'react';

import './Card.css';

interface Children {
    children: ReactNode;
}


const Card = (props: Children) => {
    return <div className="card">{props.children}</div>;
};

export default Card;
