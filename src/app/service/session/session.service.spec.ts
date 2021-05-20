import {SessionService} from './session.service';
import {Mood} from '../../api-interface/Mood';
import {Session} from '../../api-interface/Session';
import {TestBed} from '@angular/core/testing';

describe('SessionService', () => {

  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
    service = TestBed.inject(SessionService);
  });




  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#udpateCurrentService', ()  => {

      it('should update the current session object date and duration', ( ) => {
        const mockSession = {
          id: null,
          date: null,
          duration: null,
          moodBefore: Mood.Positive,
          moodAfter: Mood.Negative
        };



        console.log(mockSession.date, '-----------------');
        const day = new Date();
        const month = new Date();
        const year = new Date();

        const timeElapsed = Date.now();
        const mockDate = '2021-05-20T02:47:34.551Z';
        mockSession.date = mockDate;

        spyOn(service, 'updateCurrentSession').and.callThrough();
        spyOn(service, 'formatDate').and.callThrough();
        // "date": "2015-07-25",
        // "duration": "PT50M55S"
        console.log(service.updateCurrentSession(mockSession));
        expect(service.updateCurrentSession).toHaveBeenCalled();
        expect(service.formatDate).toHaveBeenCalledWith(mockDate);
        expect(mockSession.date).toEqual('2021-05-20');

    });
  }
  );

});
