package ftn.uns.model;

import ftn.uns.model.enums.OS;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by daka on 5/16/18.
 */

@Entity
public class Classroom implements Serializable {

    @Id
    private String id;

    private String description;

    private Integer capacity;

    @Enumerated(EnumType.STRING)
    private OS os;


    public Classroom() {
    }

    public Classroom(String id, String description, Integer capacity, OS os) {
        this.id = id;
        this.description = description;
        this.capacity = capacity;
        this.os = os;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public OS getOs() {
        return os;
    }

    public void setOs(OS os) {
        this.os = os;
    }

    @Override
    public String toString() {
        return "Classroom{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", capacity=" + capacity +
                ", os=" + os +
                '}';
    }
}
