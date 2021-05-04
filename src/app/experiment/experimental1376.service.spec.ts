import { TestBed } from '@angular/core/testing';

import { Experimental1376Service } from './experimental1376.service';

describe('Experimental1376Service', () => {
  let service: Experimental1376Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1376Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
