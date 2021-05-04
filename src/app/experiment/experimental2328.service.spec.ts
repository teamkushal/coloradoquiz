import { TestBed } from '@angular/core/testing';

import { Experimental2328Service } from './experimental2328.service';

describe('Experimental2328Service', () => {
  let service: Experimental2328Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2328Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
