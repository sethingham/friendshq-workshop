import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {
  Observable, ObjectUnsubscribedError,
} from 'rxjs';
import { Friend } from './friend.model';

export const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class FriendsServiceService {

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>('http://localhost:3000/friends');
  }

  saveFriend(saveMe: Friend): Observable<Friend> {
    return this.http.put<Friend>(`http://localhost:3000/friends/${saveMe.id}`, saveMe, { headers: this.headers });
  }

  addFriend(addMe: Friend): Observable<Friend> {
    return this.http.post<Friend>(`http://localhost:3000/friends`, JSON.stringify(addMe), { headers: this.headers });
  }

}
