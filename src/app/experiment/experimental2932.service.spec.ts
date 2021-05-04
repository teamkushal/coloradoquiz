import { TestBed } from '@angular/core/testing';

import { Experimental2932Service } from './experimental2932.service';

describe('Experimental2932Service', () => {
  let service: Experimental2932Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2932Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
