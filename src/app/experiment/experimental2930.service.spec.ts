import { TestBed } from '@angular/core/testing';

import { Experimental2930Service } from './experimental2930.service';

describe('Experimental2930Service', () => {
  let service: Experimental2930Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2930Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
