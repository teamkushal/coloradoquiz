import { TestBed } from '@angular/core/testing';

import { Experimental2946Service } from './experimental2946.service';

describe('Experimental2946Service', () => {
  let service: Experimental2946Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2946Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
