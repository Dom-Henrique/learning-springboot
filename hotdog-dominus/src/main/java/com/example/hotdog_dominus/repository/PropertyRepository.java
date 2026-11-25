package com.example.hotdog_dominus.repository;

import com.example.hotdog_dominus.model.Property;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PropertyRepository extends CrudRepository<Property, String> {
    List<Property> findByName(String filter);
}