import { TestBed } from '@angular/core/testing';

import { Experimental2461Service } from './experimental2461.service';

describe('Experimental2461Service', () => {
  let service: Experimental2461Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2461Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
