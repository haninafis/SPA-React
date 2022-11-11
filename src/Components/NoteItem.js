import React from "react";
import { showFormattedDate } from '../utils/index';

function NoteItem ({tittle, createdAt, body}){

    return (
        <article className="note-item">
            <h3 className="note-item__tittle">{tittle}</h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </article>
    );
}

export default NoteItem;
