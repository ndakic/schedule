package ftn.uns.model.json;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by daka on 5/19/18.
 */

@Entity
public class TimePeriod implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String time;

    private Integer ordertime;

    private String max;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, targetEntity = Classrooms.class)
    @OrderBy(value = "classroom ASC")
    private List<Classrooms> classrooms;

    public TimePeriod() {
    }

    public TimePeriod(String time, Integer ordertime, String max, List<Classrooms> classrooms) {
        this.time = time;
        this.ordertime = ordertime;
        this.max = max;
        this.classrooms = classrooms;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Integer ordertime) {
        this.ordertime = ordertime;
    }

    public String getMax() {
        return max;
    }

    public void setMax(String max) {
        this.max = max;
    }

    public List<Classrooms> getClassrooms() {
        return classrooms;
    }

    public void setClassrooms(List<Classrooms> classrooms) {
        this.classrooms = classrooms;
    }

    @Override
    public String toString() {
        return "TimePeriod{" +
                "time='" + time + '\'' +
                ", ordertime=" + ordertime +
                ", max='" + max + '\'' +
                ", classrooms=" + classrooms +
                '}';
    }
}
