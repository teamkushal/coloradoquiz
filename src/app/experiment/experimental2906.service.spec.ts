import { TestBed } from '@angular/core/testing';

import { Experimental2906Service } from './experimental2906.service';

describe('Experimental2906Service', () => {
  let service: Experimental2906Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2906Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
