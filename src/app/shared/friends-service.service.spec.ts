import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Friend } from 'src/app/shared/friend.model';
import { Gender } from 'src/app/shared/gender.enum';
import { BASE_URL, FriendsServiceService } from 'src/app/shared/friends-service.service';

fdescribe('FriendsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let friendsService: FriendsServiceService;
  let friend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
      ],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    friendsService = TestBed.get(FriendsServiceService);

    friend = {
      'id': 1,
      'firstName': 'Michelle',
      'lastName': 'Mulroy',
      'gender': Gender.Female,
      'fav': true
    };
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#construction', () => {
    it('should be created', () => {
      expect(friendsService).toBeDefined();
    });
  });

  describe('#getFriends', () => {
    it('should get all friends', () => {
      const expectedFriends: Friend[] = [friend];

      friendsService.getFriends()
        .subscribe(data => {
          expect(data).toEqual(expectedFriends);
        });

      const req = httpTestingController.expectOne(`${BASE_URL}/friends`);

      expect(req.request.method).toEqual('GET');
      req.flush(expectedFriends);
    });
  });
});
