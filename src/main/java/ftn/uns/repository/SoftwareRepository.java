package ftn.uns.repository;

import ftn.uns.model.Software;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by daka on 5/19/18.
 */
public interface SoftwareRepository extends JpaRepository<Software, String> {

    Software findOneById(String id);

}
