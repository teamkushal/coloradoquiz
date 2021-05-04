import { TestBed } from '@angular/core/testing';

import { Experimental2405Service } from './experimental2405.service';

describe('Experimental2405Service', () => {
  let service: Experimental2405Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2405Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
