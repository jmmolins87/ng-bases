import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent {

  heros: string[] = [ 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitam América' ];
  heroRemoved: string = '';

  deleteHero() {
    this.heroRemoved = this.heros.shift() || '';
  }

}
