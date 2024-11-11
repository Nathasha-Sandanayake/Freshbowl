package com.example.demo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipeRepo extends MongoRepository<Recipe, String>  {
    
}
