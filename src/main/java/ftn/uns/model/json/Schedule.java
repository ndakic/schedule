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
    private String realdate;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, targetEntity = TimePeriod.class)
    @OrderBy(value = "ordertime ASC")
    private List<TimePeriod> timePeriodList;

    public Schedule() {
    }

    public Schedule(String realdate, List<TimePeriod> timePeriodList) {
        this.realdate = realdate;
        this.timePeriodList = timePeriodList;
    }

    public String getRealdate() {
        return realdate;
    }

    public void setRealdate(String realdate) {
        this.realdate = realdate;
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
                ", realdate='" + realdate + '\'' +
                ", timePeriodList=" + timePeriodList +
                '}';
    }
}
