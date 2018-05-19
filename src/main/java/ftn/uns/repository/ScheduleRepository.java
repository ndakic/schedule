package ftn.uns.repository;

import ftn.uns.model.Course;
import ftn.uns.model.json.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by daka on 5/19/18.
 */
public interface ScheduleRepository extends JpaRepository<Schedule, String> {

    Schedule findOneByRealdate(String time);

}
