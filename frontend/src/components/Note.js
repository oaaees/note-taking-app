import React from "react";
import api from '../api/axiosConfig';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Note = (props) => {
    const handleDelete = async () => {
        await api.delete('/api/v1/notes/' + props._id);
        props.getNotes('active');
    }

    const handleArchive = async () => {
        await api.post('/api/v1/notes/', {
            _id: props._id,
            title: props.title,
            content: props.content,
            archived: !props.archived,
            tags: props.tags,
            lastedit: props.lastedit
        });
        
        props.getNotes('active');
    }

    const handleEdit = async (event) => {
        event.preventDefault();
        const today = new Date();

        await api.post('/api/v1/notes', {
          _id: props._id,
          title: event.target[0].value,
          content: event.target[1].value,
          archived: props.archived,
          tags: event.target[2].value.split(" "),
          lastedit: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        });
  
        props.getNotes('active');
    }

    return(
    <div className="Note">
        <div className="note--content">
            <Popup trigger={<h2 className="note--title">{props.title}</h2>} modal>
                {close => (
                    <div className="modal note--display">
                        <button className="close" onClick={close}> &times; </button>
                        <div className="header">{props.title}</div>
                        <div className="content">{props.content}</div>
                        <div className="tags">Tags: {props.tags.join(" ")}</div>
                        <div className="actions">
                            <button onClick={ close }>Close</button>
                        </div>
                    </div>
                )}
            </Popup>
            <span className="note--footer">
                <span className="note--date">Last edited: {props.lastedit}</span>
                <span className="note--icons">
                    <span className="material-symbols-sharp note--button" onClick={ handleArchive }>{props.archived ? 'arrow_upward' : 'archive'}</span>
                    <Popup trigger={<span className="material-symbols-sharp note--button">edit</span>} modal>
                        {close => (
                        <div className="modal">
                            <button className="close" onClick={close}> &times; </button>
                            <div className="header"> Edit Note </div>
                            <div className="content">
                                <form onSubmit={ async (event) => { await handleEdit(event); close(); } }>
                                    <label>Title: </label>
                                    <input type="text" name="title" defaultValue={props.title} />
                                    
                                    <label>Content: </label>
                                    <textarea name="content" rows="10" cols="30" defaultValue={props.content}></textarea>

                                    <label>Tags: </label>
                                    <input type="text" name="tags" defaultValue={props.tags.join(" ")} />

                                    <div className="actions">
                                        <input type="submit" value="Submit" />
                                        <button onClick={close}> Close </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        )}
                    </Popup>
                    <Popup trigger={<span className="material-symbols-sharp note--button">delete</span>} modal>
                        {close => (
                        <div className="delete--div modal">
                            <button className="close" onClick={close}> &times; </button>
                            <div className="content">Are you sure you want to delete?</div>
                            <div className="actions">
                                <button onClick={ handleDelete }>Yes</button>          
                                <button onClick={() => { close(); }} >No</button>
                            </div>
                        </div>
                        )}
                    </Popup>
                </span>
            </span>
        </div>
    </div>
    );
}

export default Note;