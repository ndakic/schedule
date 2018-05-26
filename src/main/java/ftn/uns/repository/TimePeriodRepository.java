package ftn.uns.repository;

import ftn.uns.model.TimePeriod;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by daka on 5/22/18.
 */
public interface TimePeriodRepository extends JpaRepository<TimePeriod, String> {
}
