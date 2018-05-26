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

    //@Id
    private String classroom;

    private Integer max;

    private String[] allowedTypes;

    @ManyToMany
    private List<Course> course;

    public Classrooms() {
    }

    public Classrooms(String classroom, Integer max, String[] allowedTypes, List<Course> course) {
        this.classroom = classroom;
        this.max = max;
        this.allowedTypes = allowedTypes;
        this.course = course;
    }
}
