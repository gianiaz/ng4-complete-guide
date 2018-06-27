import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://www.misya.info/wp-content/uploads/2014/06/focaccia-in-padella.jpg')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
