package ftn.uns.controller;


import ftn.uns.model.Course;
import ftn.uns.model.Department;
import ftn.uns.model.Software;
import ftn.uns.model.enums.OS;
import ftn.uns.model.json.Classrooms;
import ftn.uns.model.json.Schedule;
import ftn.uns.model.json.TimePeriod;
import ftn.uns.repository.ClassroomsRepository;
import ftn.uns.repository.CourseRepository;
import ftn.uns.repository.ScheduleRepository;
import ftn.uns.repository.TimePeriodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by daka on 5/8/18.
 */

@RestController
@RequestMapping("/api/home")
public class HomeController {


    @Autowired
    CourseRepository courseRepository;

    @Autowired
    ScheduleRepository scheduleRepository;

    @Autowired
    TimePeriodRepository timePeriodRepository;

    @Autowired
    ClassroomsRepository classroomsRepository;


    @RequestMapping("/courseList")
    public List<Course> courseList() throws Exception{

        List<Course> courseList = courseRepository.findAll();

        if(courseList.isEmpty()){
            System.out.println("Populate Course");

            Course course1 = new Course("HCI-SIIT", "HCI", "Iterakcija Covek Racunar", 45, new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.cross);
            Course course2 = new Course("PP-SIIT", "PP","Programski Prevodioci", 45, new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.linux);
            Course course3 = new Course("NTP-SIIT", "NTP", "Napredne Tehnike Programiranja", 45, new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.linux);
            Course course4 = new Course("OS-SIIT", "OS","Operativni Sistemi", 45, new Department("SIIT", "Elektrotehnika i Racunarstvo"), OS.linux);
            Course course5 = new Course("OP-SIIT", "OP","Organizacija Podataka", 45, new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.windows);
            Course course6 = new Course("WEB-SIIT", "WEB","Web Programiranje", 45, new Department("SIIT", "Elektrotehnika i Racunarstvo"), OS.linux);
            Course course7 = new Course("MU-SIIT", "MU","Masinsko Ucenje", 45, new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.linux);

            Course course8 = new Course("HCI-E2", "HCI","Iterakcija Covek Racunar", 45, new Department("E2", "Racunarstvo i Automatika"), OS.cross);
            Course course9 = new Course("PP-E2", "PP","Programski Prevodioci", 45, new Department("E2", "Racunarstvo i Automatika"), OS.linux);
            Course course10 = new Course("NTP-E2", "NTP","Napredne Tehnike Programiranja", 45, new Department("E2", "Racunarstvo i Automatika"), OS.linux);
            Course course11 = new Course("OS-E2", "OS","Operativni Sistemi", 45, new Department("E2", "Racunarstvo i Automatika"), OS.linux);
            Course course12 = new Course("OP-E2", "OP","Organizacija Podataka", 45, new Department("E2", "Racunarstvo i Automatika"), OS.windows);
            Course course13 = new Course("WEB-E2", "WEB","Web Programiranje", 45, new Department("E2", "Elektrotehnika i Racunarstvo"), OS.windows);
            Course course14 = new Course("MU-E2", "MU","Masinsko Ucenje", 45, new Department("E2", "Racunarstvo i Automatika"), OS.windows);

            courseRepository.save(course1);
            courseRepository.save(course2);
            courseRepository.save(course3);
            courseRepository.save(course4);
            courseRepository.save(course5);
            courseRepository.save(course6);
            courseRepository.save(course7);
            courseRepository.save(course8);
            courseRepository.save(course9);
            courseRepository.save(course10);
            courseRepository.save(course11);
            courseRepository.save(course12);
            courseRepository.save(course13);
            courseRepository.save(course14);

//            List<Course> courses1 = new ArrayList<>();
//            courses1.add(course1);
//
//            List<Course> courses2 = new ArrayList<>();
//            courses2.add(course1);

            Classrooms classroom1 = new Classrooms("A1", 1, new String [] {"linux", "cross"}, null);
            Classrooms classroom2 = new Classrooms("A2", 1, new String [] {"linux", "cross"}, null);
            Classrooms classroom3 = new Classrooms("A3", 1, new String [] {"windows", "cross"}, null);
            Classrooms classroom4 = new Classrooms("A4", 1, new String [] {"windows", "cross"}, null);
            Classrooms classroom5 = new Classrooms("A5", 1, new String [] {"cross", "linux", "windows"}, null);

            classroomsRepository.save(classroom1);
            classroomsRepository.save(classroom2);
            classroomsRepository.save(classroom3);
            classroomsRepository.save(classroom4);
            classroomsRepository.save(classroom5);

//            TimePeriod timePeriod1 = new TimePeriod("7:00", 1, 5, null);
//            TimePeriod timePeriod2 = new TimePeriod("7:15", 1, 5, null);
//            TimePeriod timePeriod3 = new TimePeriod("7:30", 1, 5, null);
//            TimePeriod timePeriod4 = new TimePeriod("7:45", 1, 5, null);
//            TimePeriod timePeriod5 = new TimePeriod("8:00", 1, 5, null);
//            TimePeriod timePeriod6 = new TimePeriod("8:15", 1, 5, null);
//            TimePeriod timePeriod7 = new TimePeriod("8:30", 1, 5, null);
//            TimePeriod timePeriod8 = new TimePeriod("8:45", 1, 5, null);
//            TimePeriod timePeriod9 = new TimePeriod("9:00", 1, 5, null);
//            TimePeriod timePeriod10 = new TimePeriod("9:15", 1, 5, null);
//            TimePeriod timePeriod11 = new TimePeriod("9:30", 1, 5, null);
//            TimePeriod timePeriod12 = new TimePeriod("9:45", 1, 5, null);
//            TimePeriod timePeriod13 = new TimePeriod("10:00", 1, 5, null);
//            TimePeriod timePeriod14 = new TimePeriod("10:15", 1, 5, null);
//            TimePeriod timePeriod15 = new TimePeriod("10:30", 1, 5, null);
//            TimePeriod timePeriod16 = new TimePeriod("10:45", 1, 5, null);
//
//            timePeriodRepository.save(timePeriod1);
//            timePeriodRepository.save(timePeriod2);
//            timePeriodRepository.save(timePeriod3);
//            timePeriodRepository.save(timePeriod4);
//            timePeriodRepository.save(timePeriod5);
//            timePeriodRepository.save(timePeriod6);
//            timePeriodRepository.save(timePeriod7);
//            timePeriodRepository.save(timePeriod8);
//            timePeriodRepository.save(timePeriod9);
//            timePeriodRepository.save(timePeriod10);
//            timePeriodRepository.save(timePeriod11);
//            timePeriodRepository.save(timePeriod12);
//            timePeriodRepository.save(timePeriod13);
//            timePeriodRepository.save(timePeriod14);
//            timePeriodRepository.save(timePeriod15);
//            timePeriodRepository.save(timePeriod16);

//            List<TimePeriod> timePeriodList = new ArrayList<>();
//            timePeriodList.add(timePeriod1);
//            timePeriodList.add(timePeriod2);
//            timePeriodList.add(timePeriod3);
//            timePeriodList.add(timePeriod4);
//
//            Schedule schedule = new Schedule();

            System.out.println("DONE!");
        }

        return courseList;
    }

    @RequestMapping("/schedule")
    public Schedule saveSchedule(@RequestBody Schedule schedule) throws Exception{

        for(TimePeriod timePeriod: schedule.getTimePeriodList())
            for(Classrooms classrooms: timePeriod.getClassrooms())
                for(Course course: classrooms.getCourse())
                    System.out.println(course.toString());


        return scheduleRepository.save(schedule);
    }

    @GetMapping("/schedule/{id}")
    public ResponseEntity getSchedule(@PathVariable String id) throws Exception{

        Schedule schedule = scheduleRepository.findOneByDay(id);

        if(schedule == null)
            return new ResponseEntity<Schedule>(schedule, HttpStatus.NO_CONTENT);

        return new ResponseEntity<Schedule>(schedule, HttpStatus.OK);

    }

    @GetMapping("/schedules")
    public List<Schedule> getAllSchedules() throws Exception{
        return scheduleRepository.findAllByOrderByDayorderAsc();

    }

    @GetMapping(value = "/course/search/{title}")
    public List<Course> search_articles(@PathVariable String title) throws Exception{
        return courseRepository.findAllByTitleIgnoreCaseContaining(title);
    }

    @RequestMapping("/deleteAllData")
    public String deleteAll() throws Exception{

        scheduleRepository.deleteAll();
        classroomsRepository.deleteAll();
        timePeriodRepository.deleteAll();
        courseRepository.deleteAll();


        return "deleted!";
    }

}
