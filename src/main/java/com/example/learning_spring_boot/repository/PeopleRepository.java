package com.example.learning_spring_boot.repository;

import com.example.learning_spring_boot.models.People;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PeopleRepository extends CrudRepository<People, String> {
    List<People> findByFullNameContainingIgnoreCaseOrderByCategoryAscNameAsc(String filter);
}
