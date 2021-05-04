import { TestBed } from '@angular/core/testing';

import { Experimental784Service } from './experimental784.service';

describe('Experimental784Service', () => {
  let service: Experimental784Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental784Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
