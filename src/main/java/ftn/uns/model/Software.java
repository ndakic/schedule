package ftn.uns.model;

import ftn.uns.model.enums.OS;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by daka on 5/19/18.
 */
@Entity
public class Software implements Serializable{


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long long_id;

    private String id;

    private String title;

    private OS os;

    public Software() {
    }

    public Software(String id, String title, OS os) {
        this.id = id;
        this.title = title;
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

    public OS getOs() {
        return os;
    }

    public void setOs(OS os) {
        this.os = os;
    }


    @Override
    public String toString() {
        return "Software{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", os=" + os +
                '}';
    }
}
