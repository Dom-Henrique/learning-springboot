package com.example.learning_spring_boot.controller;

import com.example.learning_spring_boot.models.People;
import com.example.learning_spring_boot.repository.PeopleRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PropertyController {
    private final PeopleRepository repository;

    public PropertyController(PeopleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/find")
    List<People> findByFilter(@RequestParam("filter") String filter){
        return repository.findByFullNameContainingIgnoreCaseOrderByCategoryAscNameAsc(filter);
    }
}
