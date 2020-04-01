import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/shared/friend.model';
import { Gender } from 'src/app/shared/gender.enum';
import { FriendsServiceService } from 'src/app/shared/friends-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  myFriends: Friend[] = [];
  genders = Gender;
  addNewPersonForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private friendService: FriendsServiceService) {

    this.addNewPersonForm = this.fb.group({

      id: [this.model.id],
      firstName: [this.model.firstName, [Validators.required]],
      lastName: [this.model.lastName, [Validators.required]],
      gender: [this.model.gender],
      fav: [this.model.fav]

    })

  }

  ngOnInit() { }

  model: Friend = {
    id: 0,
    firstName: "",
    lastName: "",
    gender: Gender.Male,
    fav: false,
  }

  onSubmit() {
    this.friendService.addFriend(this.addNewPersonForm.value).subscribe(f => this.router.navigate(['people/']));
  }

}
