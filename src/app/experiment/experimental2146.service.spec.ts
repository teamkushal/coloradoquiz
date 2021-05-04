import { TestBed } from '@angular/core/testing';

import { Experimental2146Service } from './experimental2146.service';

describe('Experimental2146Service', () => {
  let service: Experimental2146Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2146Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
