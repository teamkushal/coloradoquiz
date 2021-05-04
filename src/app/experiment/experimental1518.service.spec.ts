import { TestBed } from '@angular/core/testing';

import { Experimental1518Service } from './experimental1518.service';

describe('Experimental1518Service', () => {
  let service: Experimental1518Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1518Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
