package ftn.uns.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by daka on 5/8/18.
 */

@RestController
@RequestMapping("/api/home")
public class HomeController {

    @RequestMapping("/helloWorld")
    public String helloWorld() throws Exception{
        return "Hello World";
    }

}
