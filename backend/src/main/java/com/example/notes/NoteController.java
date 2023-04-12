package com.example.notes;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/notes")
public class NoteController {
    @Autowired
    private NoteService noteService;

    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes(){
        return new ResponseEntity<List<Note>>(noteService.allNotes(), HttpStatus.OK);
    }

    @GetMapping("/{_id}")
    public ResponseEntity<Optional<Note>> getSingleNote(@PathVariable ObjectId _id){
        return new ResponseEntity<Optional<Note>>(noteService.singleNote(_id), HttpStatus.OK);
    }

    @GetMapping("/archived")
    public ResponseEntity<List<Note>> getArchivedNotes(){
        return new ResponseEntity<List<Note>>(noteService.archivedNotes(), HttpStatus.OK);
    }

    @GetMapping("/active")
    public ResponseEntity<List<Note>> getActiveNotes(){
        return new ResponseEntity<List<Note>>(noteService.activeNotes(), HttpStatus.OK);
    }

    @GetMapping("/query")
    public ResponseEntity<List<Note>> getByTag(@RequestParam("tag") String tag){
        return new ResponseEntity<List<Note>>(noteService.findByTag(tag), HttpStatus.OK);
    }

    @PostMapping()
    public Note saveNote(@RequestBody Note note){
        return this.noteService.saveNote(note);
    }

    @DeleteMapping("/{_id}")
    public String deleteNote(@PathVariable ObjectId _id){
        boolean ok = this.noteService.deleteNote(_id);
        if(ok){
            return "note " + _id + " deleted";
        } else {
            return "couldnt delete the note " + _id;
        }
    }
}
