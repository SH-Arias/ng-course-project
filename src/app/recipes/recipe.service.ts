import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe1',
            'This is simply a test',
            'https://ichef.bbci.co.uk/news/660/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
            [
                new Ingredient('eggs', 1),
                new Ingredient('beans', 23)
            ]),

        new Recipe(
            'Test Recipe2', 
            'This is simply a test', 
            'https://www.nestleprofessional.es/sites/g/files/gfb231/f/styles/recipe/public/media/frappe-caramelo_fotorecortada.jpg?itok=hl_1m_dc', 
            [
                new Ingredient('milk', 2),
                new Ingredient('cocoa', 1),
                new Ingredient('cream', 1)
            ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      emitRecipeSelected(recipe: Recipe) {
          this.recipeSelected.emit(recipe);
      }

      getRecipe(index: number) {
          return this.recipes.slice()[index];
      }

}