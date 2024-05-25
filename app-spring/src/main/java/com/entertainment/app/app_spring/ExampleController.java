package com.entertainment.app.app_spring;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleController {

    @GetMapping(path = "/greetings")
    public ResponseEntity<String> greetings() {
        return ResponseEntity.ok("Hello there!");
    }
}
