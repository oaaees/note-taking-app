import React, { useState, useEffect } from "react";
import api from './api/axiosConfig';

import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [archived, toggleArchived] = useState(false);

  const getNotes = async (option) => {
    switch(option){
      case 'active':
        try{
          const response = await api.get('/api/v1/notes/active');
          setNotes(response.data);  
        }catch(err){
          console.log(err);
        }      
        toggleArchived(false);
      break;
      case 'archived':
        try{
          const response = await api.get('/api/v1/notes/archived');
          setNotes(response.data);  
        }catch(err){
          console.log(err);
        }      
        toggleArchived(true);
      break;
      case 'all':
        try{
          const response = await api.get('/api/v1/notes');
          setNotes(response.data);  
        }catch(err){
          console.log(err);
        }      
      break;
      default:
        try{
          console.log("going to /api/v1/notes/query?tag=" + option);
          const response = await api.get('/api/v1/notes/query?tag=' + option);
          setNotes(response.data);  
        }catch(err){
          console.log(err);
        }     
      break;  
    }
  }

  useEffect(() => {
    getNotes('active');
  }, [])
  

  return (
  <div className="App">
    <header>
      <h1>My { archived ? 'archived' : 'active'} Notes</h1>
      <form onSubmit={(event) => {event.preventDefault(); getNotes(event.target[0].value);}}>
      <input type="text" placeholder="tag"/><input type="submit" value="Search by Tag"/>
      </form>
      <a onClick={ () => { getNotes(archived ? 'active' : 'archived'); toggleArchived(!archived)}}>See { archived ? 'active' : 'archived' } notes</a>
      <AddNote getNotes={ getNotes } />
    </header>
    <NotesList getNotes={ getNotes } notes={notes}/>
    <footer><button onClick={() => { getNotes('all'); }}>See all notes</button><button onClick={() => { toggleArchived(false); getNotes('active'); }}>Go back to active notes</button></footer>
  </div>);
}

export default App;