import { TestBed } from '@angular/core/testing';

import { Experimental2586Service } from './experimental2586.service';

describe('Experimental2586Service', () => {
  let service: Experimental2586Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2586Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
