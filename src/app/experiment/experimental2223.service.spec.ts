import { TestBed } from '@angular/core/testing';

import { Experimental2223Service } from './experimental2223.service';

describe('Experimental2223Service', () => {
  let service: Experimental2223Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2223Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
