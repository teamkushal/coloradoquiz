import { TestBed } from '@angular/core/testing';

import { Experimental1198Service } from './experimental1198.service';

describe('Experimental1198Service', () => {
  let service: Experimental1198Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1198Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
