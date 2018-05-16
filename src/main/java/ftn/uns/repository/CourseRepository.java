package ftn.uns.repository;

import ftn.uns.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by daka on 5/16/18.
 */
public interface CourseRepository extends JpaRepository<Course, String> {
}
