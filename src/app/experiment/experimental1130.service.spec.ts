import { TestBed } from '@angular/core/testing';

import { Experimental1130Service } from './experimental1130.service';

describe('Experimental1130Service', () => {
  let service: Experimental1130Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1130Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
