import { TestBed } from '@angular/core/testing';

import { Experimental2826Service } from './experimental2826.service';

describe('Experimental2826Service', () => {
  let service: Experimental2826Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2826Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
