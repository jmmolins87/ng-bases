import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

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
      name: 'Vegeta',
      power: 12500
    }
  ];

  onNewCharacter( character: Character ): void {
    this.characters.push( character );
  }

  onDeleteCharacter( i: number ): void {
    this.characters.splice(i, 1);
  }


}
