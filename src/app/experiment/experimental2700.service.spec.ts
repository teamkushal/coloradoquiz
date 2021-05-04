import { TestBed } from '@angular/core/testing';

import { Experimental2700Service } from './experimental2700.service';

describe('Experimental2700Service', () => {
  let service: Experimental2700Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2700Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
