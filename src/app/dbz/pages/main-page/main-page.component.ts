import { Component } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { DbzService } from '../../service/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor( private _dbzService: DbzService ) {

  }
  
  get characters(): Character[] {
    return [...this._dbzService.characters];
  }
  deleteCharacters( id: string ): void {
    this._dbzService.deleteCharacterById( id );
  }
  newCharacter( character: Character ): void {
    this._dbzService.onNewCharacter(character);
  }
}
