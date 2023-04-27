import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 12500
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 10000
    }
  ]

  onNewCharacter(character: Character): void {

    // ... -> es el operador spread: sirve para poner todas las propiedades de un objeto, en este caso de character
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDelete(i: number) {
  //   this.characters.splice(i, 1);
  // }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter(character => character.id !== id );
  }
}
