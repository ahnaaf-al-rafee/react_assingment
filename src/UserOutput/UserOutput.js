import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className='Output'>
            <p>Hi {props.userName}</p>
            <p>Hope it will work, {props.userName}</p>
        </div>
    )
}

export default userOutput;
