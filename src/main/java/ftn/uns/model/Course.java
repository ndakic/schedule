package ftn.uns.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by daka on 5/16/18.
 */

@Entity
public class Course implements Serializable {

    @Id
    private String id;

    private String title;

    private String department;




    public Course() {
    }

    public Course(String id, String title, String department) {
        this.id = id;
        this.title = title;
        this.department = department;
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

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", department='" + department + '\'' +
                '}';
    }
}
