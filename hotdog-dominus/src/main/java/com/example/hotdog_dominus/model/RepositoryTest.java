package com.example.hotdog_dominus.model;

import com.example.hotdog_dominus.repository.CustomerRepository;
import com.example.hotdog_dominus.repository.ItemRepository;
import com.example.hotdog_dominus.model.CommandRunner;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RepositoryTest {
    private static final long ID_CLIENTE_FERNANDO = 11L;
    private static final long ID_CLIENTE_ZE_PEQUENO = 22L;
    private static final long ID_ITEM1 = 100L;
    private static final long ID_ITEM2 = 101L;
    private static final long ID_ITEM3 = 102L;
    private static final long ID_ORDER1 = 1000L;
    private static final long ID_ORDER2 = 1001L;
    private static final long ID_ORDER3 = 1002L;
    @Autowired
    private final CustomerRepository customerRepository;

    public RepositoryTest(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }
    //@Override
    public void run(CommandRunner commandRunner){
        Logger logger = LoggerFactory.getLogger(RepositoryTest.class);
        logger.info(">>> Initializing the system...");
        var fernando = new Customer(ID_CLIENTE_FERNANDO, "Fernando Bernardo Alencar", "Lavras da Mangabeira");
        var zePequeno = new Customer(ID_CLIENTE_ZE_PEQUENO, "José Eduardo Barreto Conceição", "Rio de Janeiro");
        var item1 = new Item(ID_ITEM1, "naosei", 22d);
        var item2 = new Item(ID_ITEM2, "sla", 33d);
        var item3 = new Item(ID_ITEM3, "naofacoideia", 44d);
        // adicionar os valores na lista
        var fernandList = new ArrayList<Item>();
        var zePequenoList = new ArrayList<Item>();
        fernandList.add(item1);
        zePequenoList.add(item2);
        zePequenoList.add(item3);
        var orderFernando = new Order(ID_ORDER1, fernando, fernandList, item1.getPrice());
        fernando.getOrders().add(orderFernando);
        var orderZePequeno = new Order(ID_ORDER2, zePequeno, zePequenoList, item2.getPrice()+item3.getPrice());
        zePequeno.getOrders().add(orderZePequeno);
        logger.info("Terminamos por aqui obg");
    }
//    private static final long ID_ORDER4 = 1011L;
}
