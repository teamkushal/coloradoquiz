import { TestBed } from '@angular/core/testing';

import { Experimental634Service } from './experimental634.service';

describe('Experimental634Service', () => {
  let service: Experimental634Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental634Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
