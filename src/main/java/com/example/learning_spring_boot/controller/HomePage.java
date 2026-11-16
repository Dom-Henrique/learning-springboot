package com.example.learning_spring_boot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomePage {
    @GetMapping("/")
    String home(){
        return "Lá detrás daquele morro tem um pé de manacá.\n\nNós vamos pra lá. Nós vamos casar. Você vem, Pedro Vyttor?\n";
    }
}
