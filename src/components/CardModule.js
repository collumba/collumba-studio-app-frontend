import React from 'react'
import { Link } from "react-router-dom";

export default function CardModule(props) {
    return (
        <Link to={props.path}>
            <div className="cardModule transitionScaleIn">
                <i className="material-icons md-48 cardModuleIcon">{props.ico}</i>
                <p>{props.text}</p>
            </div>
        </Link>
    );
}