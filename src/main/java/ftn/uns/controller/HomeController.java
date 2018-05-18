package ftn.uns.controller;

import ftn.uns.model.Classroom;
import ftn.uns.model.Course;
import ftn.uns.model.enums.OS;
import ftn.uns.repository.ClassroomRepository;
import ftn.uns.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping("/classroomList")
    public List<Classroom> classroomList() throws Exception{

        List<Classroom> classroomList = classroomRepository.findAll();

        if(classroomList.isEmpty()){
            System.out.println("Populate Classroom");

            Classroom classroom1 = new Classroom("A1", "Neki Opis 1", 7, OS.linux);
            Classroom classroom2 = new Classroom("A2", "Neki Opis 2", 10, OS.windows);
            Classroom classroom3 = new Classroom("A3", "Neki Opis 3", 9, OS.linux);
            Classroom classroom4 = new Classroom("A4", "Neki Opis 4", 10, OS.windows);
            Classroom classroom5 = new Classroom("A5", "Neki Opis 5", 21, OS.linux);

            classroomRepository.save(classroom1);
            classroomRepository.save(classroom2);
            classroomRepository.save(classroom3);
            classroomRepository.save(classroom4);
            classroomRepository.save(classroom5);

        }


        return classroomList;


    }

    @RequestMapping("/courseList")
    public List<Course> courseList() throws Exception{


        List<Course> courseList = courseRepository.findAll();

        if(courseList.isEmpty()){
            System.out.println("Populate Course");
            Course course1 = new Course("HCI", "Iterakcija Covek Racunar", "SIIT");
            Course course2 = new Course("PP", "Programski Prevodioci", "E2");
            Course course3 = new Course("BSEP", "Bezbednost Sistema u Elektronskom Poslovanju", "SIIT");
            Course course4 = new Course("NTP", "Napredne Tehnike Programiranja", "E2");

            Course course5 = new Course("OS", "Operativni Sistemi", "E2");
            Course course6 = new Course("OP", "Organizacija Podataka", "SIIT");
            Course course7 = new Course("WEB", "Web Programiranje", "E2");

            courseRepository.save(course1);
            courseRepository.save(course2);
            courseRepository.save(course3);
            courseRepository.save(course4);

            courseRepository.save(course5);
            courseRepository.save(course6);
            courseRepository.save(course7);

        }

        return courseList;
    }

}
