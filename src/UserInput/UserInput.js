import React from 'react';

const style = {
    border: '2px solid blue' 
}

const userInput = (props) =>{
    return(
        <input type='text' style={style} onChange={props.changed} value={props.userNameCurrent}></input>
    )
}

export default userInput;