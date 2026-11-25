package com.example.hotdog_dominus.repository;

import com.example.hotdog_dominus.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
