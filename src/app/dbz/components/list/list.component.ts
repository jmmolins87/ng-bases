import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characters: Character[] = []; 

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter( i: number ): void {
    this.onDelete.emit(i);
  }

}
