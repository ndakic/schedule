package ftn.uns.controller;

import ftn.uns.model.Classroom;
import ftn.uns.model.Course;
import ftn.uns.model.Department;
import ftn.uns.model.Software;
import ftn.uns.model.enums.OS;
import ftn.uns.model.json.Classrooms;
import ftn.uns.model.json.Schedule;
import ftn.uns.model.json.TimePeriod;
import ftn.uns.repository.ClassroomRepository;
import ftn.uns.repository.CourseRepository;
import ftn.uns.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by daka on 5/8/18.
 */

@RestController
@RequestMapping("/api/home")
public class HomeController {

    @Autowired
    ClassroomRepository classroomRepository;

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    ScheduleRepository scheduleRepository;

    @RequestMapping("/classroomList")
    public List<Classroom> classroomList() throws Exception{

        List<Classroom> classroomList = classroomRepository.findAll();

        if(classroomList.isEmpty()){
            System.out.println("Populate Classroom");

            Software soft1 = new Software("IJ", "IntelliJ IDEA", OS.cross);
            Software soft2 = new Software("EC", "Eclipse", OS.linux);
            Software soft3 = new Software("CB", "Code Block", OS.windows);

            Classroom classroom1 = new Classroom("A1", "Neki Opis 1", 7, OS.linux, soft1);
            Classroom classroom2= new Classroom("A2", "Neki Opis 2", 7, OS.linux, soft2);
            Classroom classroom3 = new Classroom("A3", "Neki Opis 3", 7, OS.linux, soft3);

            classroomRepository.save(classroom1);
            classroomRepository.save(classroom2);
            classroomRepository.save(classroom3);


        }


        return classroomList;


    }

    @RequestMapping("/courseList")
    public List<Course> courseList() throws Exception{

        List<Course> courseList = courseRepository.findAll();

        if(courseList.isEmpty()){
            System.out.println("Populate Course");

            Course course1 = new Course("HCI-SIIT", "HCI", "Iterakcija Covek Racunar", new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.cross);
            Course course2 = new Course("PP-SIIT", "PP","Programski Prevodioci", new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.linux);
            Course course3 = new Course("NTP-SIIT", "NTP", "Napredne Tehnike Programiranja", new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.linux);
            Course course4 = new Course("OS-SIIT", "OS","Operativni Sistemi", new Department("SIIT", "Elektrotehnika i Racunarstvo"), OS.linux);
            Course course5 = new Course("OP-SIIT", "OP","Organizacija Podataka", new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.windows);
            Course course6 = new Course("WEB-SIIT", "WEB","Web Programiranje", new Department("SIIT", "Elektrotehnika i Racunarstvo"), OS.linux);
            Course course7 = new Course("MU-SIIT", "MU","Masinsko Ucenje", new Department("SIIT", "Softversko Inzenjersvo i Informacione Tehnologije"), OS.linux);

            Course course8 = new Course("HCI-E2", "HCI","Iterakcija Covek Racunar", new Department("E2", "Racunarstvo i Automatika"), OS.cross);
            Course course9 = new Course("PP-E2", "PP","Programski Prevodioci", new Department("E2", "Racunarstvo i Automatika"), OS.linux);
            Course course10 = new Course("NTP-E2", "NTP","Napredne Tehnike Programiranja", new Department("E2", "Racunarstvo i Automatika"), OS.linux);
            Course course11 = new Course("OS-E2", "OS","Operativni Sistemi", new Department("E2", "Racunarstvo i Automatika"), OS.linux);
            Course course12 = new Course("OP-E2", "OP","Organizacija Podataka", new Department("E2", "Racunarstvo i Automatika"), OS.windows);
            Course course13 = new Course("WEB-E2", "WEB","Web Programiranje", new Department("E2", "Elektrotehnika i Racunarstvo"), OS.windows);
            Course course14 = new Course("MU-E2", "MU","Masinsko Ucenje", new Department("E2", "Racunarstvo i Automatika"), OS.windows);

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


        }

        return courseList;
    }

    @RequestMapping("/schedule")
    public Schedule saveSchedule(@RequestBody Schedule schedule) throws Exception{

        System.out.println(schedule.toString());

        //return null;
        return scheduleRepository.save(schedule);
    }

    @GetMapping("/schedule/{id}")
    public Schedule getSchedule(@PathVariable String id) throws Exception{
        return scheduleRepository.findOneByRealdate(id);

    }

    @GetMapping("/schedules")
    public List<Schedule> getAllSchedules() throws Exception{
        return scheduleRepository.findAll();

    }

    @GetMapping(value = "/course/search/{title}")
    public List<Course> search_articles(@PathVariable String title) throws Exception{

        return courseRepository.findAllByTitleIgnoreCaseContaining(title);
    }

}
