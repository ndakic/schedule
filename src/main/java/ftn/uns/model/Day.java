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
public class Day implements Serializable{

    @Id
    private String id;

    private Integer dayorder;

    @ManyToMany(cascade = CascadeType.ALL)
    @OrderBy(value = "ordertime ASC")
    private List<TimePeriod> timePeriodList;

    public Day() {
    }

    public Day(String id, Integer dayorder, List<TimePeriod> timePeriodList) {
        this.id = id;
        this.dayorder = dayorder;
        this.timePeriodList = timePeriodList;
    }
}
