package com.example.hotdog_dominus.repository;

import com.example.hotdog_dominus.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
