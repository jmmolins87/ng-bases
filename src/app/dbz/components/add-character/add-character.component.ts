import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public characters: Character = {
    name: '',
    power: 0
  };

  emmitCharacter(character: Character) {
    if( this.characters.name.length === 0 ) return;
    this.onNewCharacter.emit(character);

    this.characters = { name: '', power: 0 }
  }

}
