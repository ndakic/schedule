package ftn.uns.model;

import ftn.uns.model.enums.OS;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by daka on 5/16/18.
 */

@Entity
public class Course implements Serializable {

    @Id
    private String id;

    private String label;

    private String title;

    private Department department;

    @Enumerated(EnumType.STRING)
    private OS os;


    public Course() {
    }

    public Course(String id, String label, String title, Department department, OS os) {
        this.id = id;
        this.label = label;
        this.title = title;
        this.department = department;
        this.os = os;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public OS getOs() {
        return os;
    }

    public void setOs(OS os) {
        this.os = os;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id='" + id + '\'' +
                ", label='" + label + '\'' +
                ", title='" + title + '\'' +
                ", department=" + department +
                ", os=" + os +
                '}';
    }
}
