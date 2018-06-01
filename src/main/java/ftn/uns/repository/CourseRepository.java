package ftn.uns.repository;

import ftn.uns.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by daka on 5/16/18.
 */
public interface CourseRepository extends JpaRepository<Course, String> {

    List<Course> findAllByTitleIgnoreCaseContaining(String title);

    Course findOneById(String id);

}
