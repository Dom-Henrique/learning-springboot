package com.example.hotdog_dominus.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CommandRunner implements CommandLineRunner {
    Logger logger = LoggerFactory.getLogger(CommandRunner.class);
    @Override
    public void run(String... args){
        logger.info("=== INFORMATIONS ===");
        if (args.length>0){
            for (String arg:args){
                logger.info("[" + arg + "]");
            }
        }
        else logger.info("No arrguments");
        logger.info("Mae, acabei. Pode vir limpar");
    }
}
