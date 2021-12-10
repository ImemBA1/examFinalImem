package com.lacouf.al420565final.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    @GetMapping("/getClients")
    public ResponseEntity<?> index() {
        return ResponseEntity.ok("Hello from ClientController");
    }
}