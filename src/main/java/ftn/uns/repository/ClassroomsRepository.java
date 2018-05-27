package ftn.uns.repository;

import ftn.uns.model.Classrooms;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by daka on 5/22/18.
 */
public interface ClassroomsRepository extends JpaRepository<Classrooms, String> {

    List<Classrooms> findAllByClassroom(String title);

}
