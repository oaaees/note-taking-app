package com.example.notes;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "notes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Note {

    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId _id;
    private String title;
    private String content;
    private Boolean archived;
    private List<String> tags;
    private String lastedit;

}
