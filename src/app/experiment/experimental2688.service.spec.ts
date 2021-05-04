import { TestBed } from '@angular/core/testing';

import { Experimental2688Service } from './experimental2688.service';

describe('Experimental2688Service', () => {
  let service: Experimental2688Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2688Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
