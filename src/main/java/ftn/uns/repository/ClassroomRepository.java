package ftn.uns.repository;

import ftn.uns.model.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by daka on 5/16/18.
 */
public interface ClassroomRepository extends JpaRepository<Classroom, String> {
}
