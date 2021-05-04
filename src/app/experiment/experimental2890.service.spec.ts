import { TestBed } from '@angular/core/testing';

import { Experimental2890Service } from './experimental2890.service';

describe('Experimental2890Service', () => {
  let service: Experimental2890Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2890Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
