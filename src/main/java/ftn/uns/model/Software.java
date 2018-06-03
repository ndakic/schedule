package ftn.uns.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import ftn.uns.model.enums.OS;
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
public class Software implements Serializable{

    @Id
    private String id;

    private String title;

    private OS os;

    private String manufacturer;

    private String website;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy")
    private Date date;

    private Integer price;

    private String description;

    public Software() {
    }

    public Software(String id, String title, OS os, String manufacturer, String website, Date date, Integer price, String description) {
        this.id = id;
        this.title = title;
        this.os = os;
        this.manufacturer = manufacturer;
        this.website = website;
        this.date = date;
        this.price = price;
        this.description = description;
    }

}
