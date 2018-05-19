package ftn.uns.model.json;

import ftn.uns.model.Course;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;

/**
 * Created by daka on 5/19/18.
 */

@Entity
@Table(name = "classroom_table")
public class Classrooms {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String classroom;

    private String max;

    private String[] allowedTypes;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Course> course;

    public Classrooms() {
    }

    public Classrooms(String classroom, String max, String[] allowedTypes, List<Course> course) {
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

    public String getMax() {
        return max;
    }

    public void setMax(String max) {
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
                "classroom='" + classroom + '\'' +
                ", max='" + max + '\'' +
                ", allowedTypes=" + Arrays.toString(allowedTypes) +
                ", course=" + course +
                '}';
    }
}
