import React from "react";
import Note from "./Note";

const NotesList = ({ getNotes, notes }) => {
    return(
    <div className="NotesList">
        {notes.map((note) => (
            <Note key={note._id} _id={note._id} title={note.title} content={note.content} archived={note.archived} tags={note.tags} lastedit={note.lastedit} getNotes={ getNotes }/>
        ))}
    </div>    
    );
}

export default NotesList;