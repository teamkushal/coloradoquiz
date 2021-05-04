import { TestBed } from '@angular/core/testing';

import { Experimental2716Service } from './experimental2716.service';

describe('Experimental2716Service', () => {
  let service: Experimental2716Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2716Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
