package ftn.uns.model;

import ftn.uns.model.Course;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 * Created by daka on 5/19/18.
 */

@Entity
@Data
public class Classrooms implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String classroom;

    private Integer max;

    private String[] allowedTypes;

    @ManyToMany
    private List<Course> course;

    private String description;

    private Integer capacity;

    private Boolean projector;

    private Boolean basicTable;

    private Boolean smartTable;

    private Software software;


    public Classrooms() {
    }

    public Classrooms(String classroom, Integer max, String[] allowedTypes, List<Course> course, String description, Integer capacity, Boolean projector, Boolean basicTable, Boolean smartTable, Software software) {
        this.classroom = classroom;
        this.max = max;
        this.allowedTypes = allowedTypes;
        this.course = course;
        this.description = description;
        this.capacity = capacity;
        this.projector = projector;
        this.basicTable = basicTable;
        this.smartTable = smartTable;
        this.software = software;
    }
}
