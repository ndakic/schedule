package ftn.uns.repository;

import ftn.uns.model.settings.ClassroomsSettings;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by daka on 5/26/18.
 */
public interface ClassroomsSettingsRepository extends JpaRepository<ClassroomsSettings, String>{
}
