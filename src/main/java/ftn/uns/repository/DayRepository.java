package ftn.uns.repository;

import ftn.uns.model.Day;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by daka on 5/19/18.
 */
public interface DayRepository extends JpaRepository<Day, String> {

    Day findOneById(String time);

    List<Day> findAllByOrderByDayorderAsc();

}
