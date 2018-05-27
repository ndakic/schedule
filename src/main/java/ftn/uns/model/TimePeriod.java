package ftn.uns.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by daka on 5/19/18.
 */

@Entity
@Data
public class TimePeriod implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String time;

    private Integer ordertime;

    private Integer max;

    @ManyToMany(cascade = CascadeType.ALL)
    @OrderBy(value = "classroom ASC")
    private List<Classrooms> classrooms;

    public TimePeriod() {
    }

    public TimePeriod(String time, Integer ordertime, Integer max, List<Classrooms> classrooms) {
        this.time = time;
        this.ordertime = ordertime;
        this.max = max;
        this.classrooms = classrooms;
    }
}
