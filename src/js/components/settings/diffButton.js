import React from 'react';

const DiffButton = (props) => {
    
    const pick = (event) => {
        props.click(props.width, props.height);
    }
    const check = () => {
        if(props.width === props.currentWidth){
            return {
                color: "blue",
                backgroundColor: "brown"
            }
        }
    }

    return <button style={check()} onClick={pick} className="diff-button">{props.width} X {props.height}</button>
}

export default DiffButton;