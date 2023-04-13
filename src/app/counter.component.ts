import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ title }}</h1>


        <h2>El número base es: <strong>{{ base }}</strong></h2>
        
        <div>
            <button (click)="amount(base)" >+ {{ base }}</button>
            <span>{{ number }}</span>
            <button (click)="amount(-base)">- {{ base }}</button>
        </div>
    `,
    styles: []
})

export class CounterComponent {

    title: string = 'Counter App';
    number: number = 10;
    base: number = 5;

    amount(valor: number) {
        this.number += valor;
    }
    
}