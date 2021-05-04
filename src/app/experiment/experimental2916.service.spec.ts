import { TestBed } from '@angular/core/testing';

import { Experimental2916Service } from './experimental2916.service';

describe('Experimental2916Service', () => {
  let service: Experimental2916Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2916Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
