import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter( id?: string ) {
    if(!id) return;
    
    this.onDelete.emit( id );    
  }

}
