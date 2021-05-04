import { TestBed } from '@angular/core/testing';

import { Experimental2752Service } from './experimental2752.service';

describe('Experimental2752Service', () => {
  let service: Experimental2752Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2752Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
