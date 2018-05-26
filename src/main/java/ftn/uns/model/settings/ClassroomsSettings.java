package ftn.uns.model.settings;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by daka on 5/26/18.
 */

@Entity
@Data
public class ClassroomsSettings {

    @Id
    private String id;

    private Boolean status;

    public ClassroomsSettings() {
    }

    public ClassroomsSettings(String id, Boolean status) {
        this.id = id;
        this.status = status;
    }
}
