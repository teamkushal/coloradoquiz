import { TestBed } from '@angular/core/testing';

import { Experimental2989Service } from './experimental2989.service';

describe('Experimental2989Service', () => {
  let service: Experimental2989Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2989Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
