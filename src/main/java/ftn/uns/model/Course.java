package ftn.uns.model;

import ftn.uns.model.enums.OS;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

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

    private String description;

    private Integer groupSize;

    private Integer numberOfTerms;

    private Boolean projectorNeed;

    private Boolean basicTableNeed;

    private Boolean smartTableNeed;

    private Software softwareNeed;


    public Course() {
    }

    public Course(String id, String label, String title, Integer duration, Department department, OS os, String description, Integer groupSize, Integer numberOfTerms, Boolean projectorNeed, Boolean basicTableNeed, Boolean smartTableNeed, Software softwareNeed) {
        this.id = id;
        this.label = label;
        this.title = title;
        this.duration = duration;
        this.department = department;
        this.os = os;
        this.description = description;
        this.groupSize = groupSize;
        this.numberOfTerms = numberOfTerms;
        this.projectorNeed = projectorNeed;
        this.basicTableNeed = basicTableNeed;
        this.smartTableNeed = smartTableNeed;
        this.softwareNeed = softwareNeed;
    }
}
