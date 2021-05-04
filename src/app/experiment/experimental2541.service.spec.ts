import { TestBed } from '@angular/core/testing';

import { Experimental2541Service } from './experimental2541.service';

describe('Experimental2541Service', () => {
  let service: Experimental2541Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2541Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
