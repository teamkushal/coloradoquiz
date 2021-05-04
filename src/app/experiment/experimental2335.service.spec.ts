import { TestBed } from '@angular/core/testing';

import { Experimental2335Service } from './experimental2335.service';

describe('Experimental2335Service', () => {
  let service: Experimental2335Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2335Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
