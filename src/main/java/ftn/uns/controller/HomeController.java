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

            Classroom classroom1 = new Classroom("classroom1", "Neki Opis 1", 7, OS.linux);
            Classroom classroom2 = new Classroom("classroom2", "Neki Opis 2", 10, OS.windows);
            Classroom classroom3 = new Classroom("classroom3", "Neki Opis 3", 9, OS.linux);
            Classroom classroom4 = new Classroom("classroom4", "Neki Opis 4", 10, OS.windows);
            Classroom classroom5 = new Classroom("classroom5", "Neki Opis 5", 21, OS.linux);

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
            Course course1 = new Course("course1", "HCI", "SIIT");
            Course course2 = new Course("course2", "PP", "E2");
            Course course3 = new Course("course3", "BSEP", "SIIT");
            Course course4 = new Course("course4", "NTP", "E2");

            courseRepository.save(course1);
            courseRepository.save(course2);
            courseRepository.save(course3);
            courseRepository.save(course4);

        }

        return courseList;
    }

}
