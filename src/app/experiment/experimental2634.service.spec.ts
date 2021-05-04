import { TestBed } from '@angular/core/testing';

import { Experimental2634Service } from './experimental2634.service';

describe('Experimental2634Service', () => {
  let service: Experimental2634Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2634Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
