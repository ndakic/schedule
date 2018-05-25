package ftn.uns.model;

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

}
