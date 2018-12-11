import React from 'react';
import './ListItem.css';
const listItem  = (props) => {
    return(
        <li><input type="checkbox" checked = {props.checked} onChange = {props.changed}/> {props.children}</li>
    );
}
export default listItem;