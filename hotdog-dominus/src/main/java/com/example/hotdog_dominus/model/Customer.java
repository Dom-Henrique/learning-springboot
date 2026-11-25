package com.example.hotdog_dominus.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.List;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // vai gerar um ID automaticamente
    private long id;
    // definicao de atributos com o uso de controladores de dados
    @NotNull
    @Size(min=2, max=300, message="The attributte needs to be between {min} and {max}")
    private String name;
//    @NotNull
//    @Size(min=2, max=300, message="The attributte needs to be between {min} and {max}")
//    private String lastName;
    @NotNull
    @Size(min=2,max=300, message="The attributte needs to be between {min} and {max}")
    private String address;

    public Customer(long id, String name, String address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    @OneToMany(mappedBy = "customer", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    // cascade serve pra aplicar as alteracoes automaticamente
    private List<Order> orders;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
