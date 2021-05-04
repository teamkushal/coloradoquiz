import { TestBed } from '@angular/core/testing';

import { Experimental2568Service } from './experimental2568.service';

describe('Experimental2568Service', () => {
  let service: Experimental2568Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2568Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
