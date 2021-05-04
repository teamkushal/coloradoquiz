import { TestBed } from '@angular/core/testing';

import { Experimental1392Service } from './experimental1392.service';

describe('Experimental1392Service', () => {
  let service: Experimental1392Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1392Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
