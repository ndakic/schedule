package ftn.uns.model.json;

import javax.persistence.*;
import java.util.List;

/**
 * Created by daka on 5/19/18.
 */

@Entity
@Table(name = "time_period_table")
public class TimePeriod {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String time;

    private String max;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Classrooms> classrooms;

    public TimePeriod() {
    }

    public TimePeriod(String time, String max, List<Classrooms> classrooms) {
        this.time = time;
        this.max = max;
        this.classrooms = classrooms;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
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
                ", max='" + max + '\'' +
                ", classrooms=" + classrooms +
                '}';
    }
}
