import { TestBed } from '@angular/core/testing';

import { Experimental2206Service } from './experimental2206.service';

describe('Experimental2206Service', () => {
  let service: Experimental2206Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2206Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
