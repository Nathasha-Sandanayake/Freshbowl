package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "recipes")
public class Recipe {
    @Id
    private String id;
    private String name;
    private String ingrediants;
    private String instructions;

    public Recipe(String id,String name, String ingrediants, String instructions) {
        this.id = id;
        this.name = name;
        this.ingrediants = ingrediants;
        this.instructions = instructions;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getIngrediants() {
        return ingrediants;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setIngrediants(String ingrediants) {
        this.ingrediants = ingrediants;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }
    
}
