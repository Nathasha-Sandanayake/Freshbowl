package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {
     @Autowired
    private RecipeRepo recipeRepo;

    public Recipe findRecipeById(String id) {
        return recipeRepo.findById(id).orElse(null);
    }
}
