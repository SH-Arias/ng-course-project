import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputReference: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputReference: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredientName = this.nameInputReference.nativeElement.value;
    const newIngredientAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.shoppingListService.addIngredient(newIngredient);
    console.log(newIngredient);
  }

}
