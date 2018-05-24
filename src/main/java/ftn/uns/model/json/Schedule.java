package ftn.uns.model.json;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by daka on 5/19/18.
 */

@Entity
@Table(name = "schedule")
public class Schedule implements Serializable{

    @Id
    private String day;

    private Integer dayorder;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @OrderBy(value = "ordertime ASC")
    private List<TimePeriod> timePeriodList;

    public Schedule() {
    }

    public Schedule(String day, Integer dayorder, List<TimePeriod> timePeriodList) {
        this.day = day;
        this.dayorder = dayorder;
        this.timePeriodList = timePeriodList;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public Integer getDayorder() {
        return dayorder;
    }

    public void setDayorder(Integer dayorder) {
        this.dayorder = dayorder;
    }

    public List<TimePeriod> getTimePeriodList() {
        return timePeriodList;
    }

    public void setTimePeriodList(List<TimePeriod> timePeriodList) {
        this.timePeriodList = timePeriodList;
    }

    @Override
    public String toString() {
        return "Schedule{" +
                "day='" + day + '\'' +
                ", dayorder=" + dayorder +
                ", timePeriodList=" + timePeriodList +
                '}';
    }
}
