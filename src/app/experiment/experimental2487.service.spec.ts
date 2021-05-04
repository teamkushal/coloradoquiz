import { TestBed } from '@angular/core/testing';

import { Experimental2487Service } from './experimental2487.service';

describe('Experimental2487Service', () => {
  let service: Experimental2487Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2487Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
