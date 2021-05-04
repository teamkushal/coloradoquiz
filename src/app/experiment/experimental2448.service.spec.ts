import { TestBed } from '@angular/core/testing';

import { Experimental2448Service } from './experimental2448.service';

describe('Experimental2448Service', () => {
  let service: Experimental2448Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2448Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
