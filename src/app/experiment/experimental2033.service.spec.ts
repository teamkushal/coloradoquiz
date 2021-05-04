import { TestBed } from '@angular/core/testing';

import { Experimental2033Service } from './experimental2033.service';

describe('Experimental2033Service', () => {
  let service: Experimental2033Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2033Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
