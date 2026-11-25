package com.example.hotdog_dominus.repository;

import com.example.hotdog_dominus.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
