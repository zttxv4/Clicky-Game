import React from "react";
import "./Title.css";
import Arrow from 'react-icons/lib/fa/caret-right';

const Title = props => (
    <div className="gameScore">
        <h2 className="score">Your Score <Arrow /> {props.total}</h2>
        <h2 className="status">{props.status}</h2>
    </div>
);

export default Title;
