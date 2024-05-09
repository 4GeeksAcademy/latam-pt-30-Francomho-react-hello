import React from "react";
import Proptypes from 'prop-types';

export const SecondsCounter = (props) => {
    return (
        <div  id="numbersStyle" className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="six">{props.digitSix % 10}</div>
            <div className="five">{props.digitFive % 10}</div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
};

SecondsCounter.prototype = {
    digitSix : Proptypes.number,
    digitFour : Proptypes.number,
    digitFive : Proptypes.number,
    digitThree : Proptypes.number,
    digitTwo : Proptypes.number,
    digitOne : Proptypes.number,

};

//COMO SEPARAR DIGITOS- extraerle los digitos al props

//cuando div 1 = 10 div 2 = counter 