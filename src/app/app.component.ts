import { Component } from '@angular/core';
import { Hero } from "./shared/hero";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    // heroes = ['Batman', 'Spyderman', 'IronMan', 'Superman', 'Arrow', 'Grut', 'Rocket'];
    heroes: Hero[] = [
        new Hero(1, 'Batman'), 
        new Hero(2, 'Spyderman'),
        new Hero(3, 'IronMan'),
        new Hero(4, 'Superman'),
        new Hero(5, 'Arrow'),
        new Hero(6, 'Grut'),
        new Hero(7, 'Rocket')
    ];
    myHero = this.heroes[0];
}
