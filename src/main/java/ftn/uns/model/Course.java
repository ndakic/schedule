package ftn.uns.model;

import ftn.uns.model.enums.OS;
import ftn.uns.model.json.Classrooms;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by daka on 5/16/18.
 */

@Entity
@Data
public class Course implements Serializable {

    @Id
    private String id;

    private String label;

    private String title;

    private Integer duration;

    private Department department;

    @Enumerated(EnumType.STRING)
    private OS os;

//    @ManyToMany(mappedBy = "course")
//    private List<Classrooms> classroomsList;

    public Course() {
    }

    public Course(String id, String label, String title, Integer duration, Department department, OS os) {
        this.id = id;
        this.label = label;
        this.title = title;
        this.duration = duration;
        this.department = department;
        this.os = os;
    }
}
