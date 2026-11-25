package com.example.hotdog_dominus.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomePage {
    @GetMapping("/")
    String home(){
        return "Hello World!";
    }
}
