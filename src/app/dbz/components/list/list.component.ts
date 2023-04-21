import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter

  deleteCharacter( index: number ) {
    this.onDelete.emit( index );
  }

}
