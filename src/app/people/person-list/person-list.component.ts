import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/shared/friend.model';
import { FriendsServiceService } from 'src/app/shared/friends-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})

export class PersonListComponent implements OnInit {

  myFriends: Friend[] = [];

  //don't put business logic in constructor
  constructor(private service: FriendsServiceService) { }

  ngOnInit() {

    //guaranteed to be run after constructor
    this.service.getFriends().subscribe(fs => this.myFriends = fs)

  }

  displayBanner = false;

  showBanner(friend: Friend) {
    this.service.saveFriend(friend).subscribe(() => {
      this.displayBanner = true;
      setTimeout(() => {
        this.displayBanner = false;
      }, 3000);
    })

  };

}


