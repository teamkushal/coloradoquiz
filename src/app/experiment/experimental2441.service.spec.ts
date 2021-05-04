import { TestBed } from '@angular/core/testing';

import { Experimental2441Service } from './experimental2441.service';

describe('Experimental2441Service', () => {
  let service: Experimental2441Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2441Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
