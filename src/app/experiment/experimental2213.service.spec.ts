import { TestBed } from '@angular/core/testing';

import { Experimental2213Service } from './experimental2213.service';

describe('Experimental2213Service', () => {
  let service: Experimental2213Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2213Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
