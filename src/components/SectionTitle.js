import React from 'react'
import { MdMoreVert } from 'react-icons/md';

export default function SectionTitle(props) {
    return (
        <div className="sectionTitle">
            <h3><MdMoreVert /> {props.title}</h3>
        </div>
    );
}