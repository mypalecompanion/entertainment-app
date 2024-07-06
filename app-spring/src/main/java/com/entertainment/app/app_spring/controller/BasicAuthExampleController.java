package com.entertainment.app.app_spring.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicAuthExampleController {

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/auth-test/basic")
    public ResponseEntity securedApi(@RequestHeader HttpHeaders httpHeaders) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode rootNode = mapper.createObjectNode();
        rootNode.put("message", "basic auth success");
        rootNode.put("instance", "Spring Boot App");

        return new ResponseEntity(rootNode, HttpStatus.OK);
    }
}
