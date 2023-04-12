import React from "react";
import api from '../api/axiosConfig';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddNote = (props) => {

    const handleSubmit = async (event) => {
      event.preventDefault();
      const today = new Date();

      await api.post('/api/v1/notes', {
        title: event.target[0].value,
        content: event.target[1].value,
        archived: false,
        tags: event.target[2].value.split(" "),
        lastedit: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
      });
    }

    return (<Popup trigger={<button className="button"> Add New Note </button>} modal>
        {close => (
          <div className="modal">
            <button className="close" onClick={close}> &times; </button>
            <div className="header"> Create Note </div>
            <div className="content">
                <form onSubmit={ async (event) => { await handleSubmit(event); close(); props.getNotes('active');}}>
                    <label>Title: </label>
                    <input type="text" name="title" placeholder="Title of your note"/>
                    
                    <label>Content: </label>
                    <textarea name="content" rows="10" cols="30" placeholder="Write here your notes..."></textarea>

                    <label>Tags: </label>
                    <input type="text" name="tags" placeholder="first-tag second-tag" />

                    <div className="actions">
                        <input type="submit" value="Submit" />
                        <button className="close" onClick={close}> Close </button>
                    </div>
                </form>
            </div>
          </div>
        )}
      </Popup>);
}

export default AddNote;