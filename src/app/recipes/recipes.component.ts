import {Component, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe.model";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    recipeToSend: Recipe;

    constructor() {
    }

    ngOnInit(): void {
    }

    onReceiveRecipe(recipe: Recipe) {
        this.recipeToSend = recipe;
        console.log('Recipes component:  ' + recipe.name);
    }
}
