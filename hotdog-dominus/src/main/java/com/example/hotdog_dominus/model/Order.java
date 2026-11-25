package com.example.hotdog_dominus.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
//    @NotNull
//    @Size(min=2, max=300, message="The attributte needs to be between {min} and {max}")
//    private String orderName;
    @ManyToOne
    private Customer customer;
    // cada ordem pode ter varios outros clientes. eh so lembrar do siri cascudo
    @ManyToMany
    private List<Item> items;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date date;
    @Min(1)
    private Double totalPrice;

    public Order(Long id, Customer customer, List<Item> items, Double totalPrice) {
        this.id = id;
        this.customer = customer;
        this.items = items;
        this.totalPrice = totalPrice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
