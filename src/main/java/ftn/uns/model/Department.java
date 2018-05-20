package ftn.uns.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by daka on 5/19/18.
 */

@Entity
public class Department implements Serializable {

    @Id
    private String id;

    private String title;

    public Department() {
    }

    public Department(String id, String title) {
        this.id = id;
        this.title = title;
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

    @Override
    public String toString() {
        return "Department{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                '}';
    }
}
