import { TestBed } from '@angular/core/testing';

import { Experimental2386Service } from './experimental2386.service';

describe('Experimental2386Service', () => {
  let service: Experimental2386Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2386Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
