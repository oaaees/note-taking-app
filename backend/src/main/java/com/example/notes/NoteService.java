package com.example.notes;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

    public List<Note> allNotes(){
        return noteRepository.findAll();
    }

    public Optional<Note> singleNote(ObjectId _id){
        return noteRepository.findById(_id);
    }

    public List<Note> archivedNotes(){
        return noteRepository.findByArchived(true);
    }

    public List<Note> activeNotes(){
        return noteRepository.findByArchived(false);
    }

    public List<Note> findByTag(String tag){
        return noteRepository.findByTags(tag);
    }

    public Note saveNote(Note note){
        return noteRepository.save(note);
    }

    public boolean deleteNote(ObjectId _id){
        try {
            noteRepository.deleteById(_id);
        } catch (Exception err) {
            return false;
        }

        return true;
    }
}
