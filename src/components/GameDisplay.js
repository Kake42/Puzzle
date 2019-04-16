import React from 'react';

const GameDisplay = props => {
    return (
    <>
        <button 
        className="panel"
        style={{backgroundColor: panelColors[props.status]}}
        onClick={() => props.onClick(props.number)}>
        {props.number}
        </button>
    </>
    )
}

const panelColors = {
    empty: 'white',
    nonempty: 'lightblue'
}

export default GameDisplay;