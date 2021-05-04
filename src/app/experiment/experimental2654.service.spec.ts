import { TestBed } from '@angular/core/testing';

import { Experimental2654Service } from './experimental2654.service';

describe('Experimental2654Service', () => {
  let service: Experimental2654Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2654Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
