import React from 'react'
import { Link } from "react-router-dom";

export default function CardEstatisticas(props) {
    return (
        <Link to={props.path}>
            <div className="cardEstatisticas transitionScaleIn">
                <div>
                    <i className="material-icons md-48 cardModuleIcon">{props.ico}</i>
                    <span>{props.valueNumber}</span>
                </div>
                <p>{props.text}</p>
            </div>
        </Link>
    );
}