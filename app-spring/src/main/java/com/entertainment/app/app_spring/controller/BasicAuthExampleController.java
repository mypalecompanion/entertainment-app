package com.entertainment.app.app_spring.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicAuthExampleController {

    @GetMapping("/auth-test/basic")
    public ResponseEntity securedApi(@RequestHeader HttpHeaders httpHeaders) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode rootNode = mapper.createObjectNode();

        ObjectNode childNode = mapper.createObjectNode();
        childNode.put("message", "basic auth success");
        childNode.put("instance", "Spring Boot App");
        rootNode.set("child", childNode);

        return new ResponseEntity(rootNode, HttpStatus.OK);
    }
}
