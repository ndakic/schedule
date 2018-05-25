package ftn.uns.model;

import ftn.uns.model.enums.OS;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by daka on 5/19/18.
 */
@Entity
@Data
public class Software implements Serializable{

    @Id
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
}
