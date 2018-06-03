package ftn.uns.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by daka on 5/19/18.
 */

@Entity
@Data
public class Department implements Serializable {

    @Id
    private String id;

    private String title;

    private String color;

    private String description;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy")
    private Date date;


    public Department() {
    }

    public Department(String id, String title, String color, String description, Date date) {
        this.id = id;
        this.title = title;
        this.color = color;
        this.description = description;
        this.date = date;
    }

}
