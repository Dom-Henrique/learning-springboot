package com.example.hotdog_dominus.controller;

import com.example.hotdog_dominus.model.Property;
import com.example.hotdog_dominus.repository.PropertyRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PropertyController {
    private final PropertyRepository property;
    public PropertyController(PropertyRepository property) {
        this.property = property;
    }
    @GetMapping("/find")
    List<Property> findByFilter(@RequestParam("filter") String filter){
        return property.findByName(filter);
    }
}
