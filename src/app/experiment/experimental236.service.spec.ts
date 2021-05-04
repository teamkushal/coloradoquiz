import { TestBed } from '@angular/core/testing';

import { Experimental236Service } from './experimental236.service';

describe('Experimental236Service', () => {
  let service: Experimental236Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental236Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
