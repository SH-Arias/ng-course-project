import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  currentRecipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.currentRecipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onToShoppingListClicked() {
    this.shoppingListService.addIngredients(this.currentRecipe.ingredients);
  }

  toEditPage() {
    this.router.navigate(["edit"], {relativeTo: this.route});
    // this.router.navigate(["../", this.id, 'edit'], {relativeTo: this.route});
  }

}
