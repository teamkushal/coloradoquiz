import { TestBed } from '@angular/core/testing';

import { Experimental95Service } from './experimental95.service';

describe('Experimental95Service', () => {
  let service: Experimental95Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental95Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
