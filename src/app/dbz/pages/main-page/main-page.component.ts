import { Component } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Cell',
      power: 14000
    },
    {
      name: 'Trunks',
      power: 10000
    },
    {
      name: 'Vegeta',
      power: 12500
    },
    {
      name: 'Freezer',
      power: 14500
    }
  ];

  onNewCharacter( character: Character ) {
    this.characters.push( character );
  }
  
  deleteCharacter( index: number ) {
    this.characters.splice( index, 1 );
  }

}
