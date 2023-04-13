import { Component } from '@angular/core';


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styles: []
})

export class HeroComponent {

    name: string = 'Ironman';
    age: number = 35;

    obtainName(): string {
        return `${ this.name } - ${ this.age }`;
    }

    get capitalizeName(): string {
        return this.name.toUpperCase();
    }

    changeName() {
        this.name = 'Superman';
    }

    changeAge() {
        this.age = 25;
    }

    reset() {
        this.name = 'Ironman';
        this.age = 35;
    }

}