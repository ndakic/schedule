package ftn.uns.model.json;

import ftn.uns.model.Course;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 * Created by daka on 5/19/18.
 */

@Entity
public class Classrooms implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String classroom;

    private Integer max;

    private String[] allowedTypes;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Course> course;

    public Classrooms() {
    }

    public Classrooms(String classroom, Integer max, String[] allowedTypes, List<Course> course) {
        this.classroom = classroom;
        this.max = max;
        this.allowedTypes = allowedTypes;
        this.course = course;
    }

    public String getClassroom() {
        return classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }

    public Integer getMax() {
        return max;
    }

    public void setMax(Integer max) {
        this.max = max;
    }

    public String[] getAllowedTypes() {
        return allowedTypes;
    }

    public void setAllowedTypes(String[] allowedTypes) {
        this.allowedTypes = allowedTypes;
    }

    public List<Course> getCourse() {
        return course;
    }

    public void setCourse(List<Course> course) {
        this.course = course;
    }

    @Override
    public String toString() {
        return "Classrooms{" +
                ", classroom='" + classroom + '\'' +
                ", max='" + max + '\'' +
                ", allowedTypes=" + Arrays.toString(allowedTypes) +
                ", course=" + course +
                '}';
    }
}
