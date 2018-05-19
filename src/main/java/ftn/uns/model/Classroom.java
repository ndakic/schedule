package ftn.uns.model;

import ftn.uns.model.enums.OS;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by daka on 5/16/18.
 */

@Entity
public class Classroom implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long long_id;

    private String id;

    private String description;

    private Integer capacity;

    @Enumerated(EnumType.STRING)
    private OS os;

    @ManyToOne(cascade = CascadeType.ALL)
    private Software software;


    public Classroom() {
    }

    public Classroom(String id, String description, Integer capacity, OS os, Software software) {
        this.id = id;
        this.description = description;
        this.capacity = capacity;
        this.os = os;
        this.software = software;
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

    public Software getSoftware() {
        return software;
    }

    public void setSoftware(Software software) {
        this.software = software;
    }

    @Override
    public String toString() {
        return "Classroom{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", capacity=" + capacity +
                ", os=" + os +
                ", software=" + software +
                '}';
    }
}
