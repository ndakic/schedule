package ftn.uns.model.json;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by daka on 5/19/18.
 */

@Entity
@Data
public class Schedule implements Serializable{

    @Id
    private String day;

    private Integer dayorder;

    @ManyToMany(cascade = CascadeType.ALL)
    @OrderBy(value = "ordertime ASC")
    private List<TimePeriod> timePeriodList;

    public Schedule() {
    }

    public Schedule(String day, Integer dayorder, List<TimePeriod> timePeriodList) {
        this.day = day;
        this.dayorder = dayorder;
        this.timePeriodList = timePeriodList;
    }
}
