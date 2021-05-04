import { TestBed } from '@angular/core/testing';

import { Experimental2972Service } from './experimental2972.service';

describe('Experimental2972Service', () => {
  let service: Experimental2972Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2972Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
