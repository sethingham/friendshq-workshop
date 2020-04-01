import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from 'src/app/shared/friend.model';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})

export class ShowPersonComponent {

  @Input() friend: Friend;
  @Output() giveFriend: EventEmitter<Friend> = new EventEmitter();

  like(e: Event) {
    e.stopPropagation();
    this.friend.fav = !this.friend.fav;
    this.giveFriend.emit(this.friend);
  }

}
