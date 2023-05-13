import React from 'react'
import './Card.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Card(props) {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{props.title}</span>
                <span className="counterWidget">{props.isMoney} {props.counter}</span>
                <span className="link">{props.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20 %
                </div>
                {props.icon}
            </div>
        </div>
    )
}

export default Card
