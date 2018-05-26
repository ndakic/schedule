package ftn.uns.controller;

import ftn.uns.model.Day;
import ftn.uns.repository.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by daka on 5/26/18.
 */
@RestController
@RequestMapping("/api/day")
public class DayController {

    @Autowired
    DayRepository dayRepository;



    @GetMapping("/{id}")
    public ResponseEntity getDay(@PathVariable String id) throws Exception{

        Day day = dayRepository.findOneById(id);

        if(day == null)
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);

        return new ResponseEntity<Day>(day, HttpStatus.OK);

    }

    @PostMapping("/saveDay")
    public Day saveDay(@RequestBody Day day) throws Exception{

        Day saved = dayRepository.save(day);
        System.out.println("SAVED: " + saved.toString());

        return saved;
    }

    @GetMapping("/days")
    public List<Day> getAllDays() throws Exception{
        return dayRepository.findAllByOrderByDayorderAsc();
    }
}
