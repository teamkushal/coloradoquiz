import { TestBed } from '@angular/core/testing';

import { Experimental2331Service } from './experimental2331.service';

describe('Experimental2331Service', () => {
  let service: Experimental2331Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2331Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
