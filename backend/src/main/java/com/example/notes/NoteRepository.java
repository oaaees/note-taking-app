package com.example.notes;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends MongoRepository<Note, ObjectId>{
    public List<Note> findByArchived(boolean bool);

    public List<Note> findByTags(String tag);
}
