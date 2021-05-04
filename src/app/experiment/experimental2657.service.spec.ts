import { TestBed } from '@angular/core/testing';

import { Experimental2657Service } from './experimental2657.service';

describe('Experimental2657Service', () => {
  let service: Experimental2657Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2657Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
