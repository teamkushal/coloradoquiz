import { TestBed } from '@angular/core/testing';

import { Experimental2065Service } from './experimental2065.service';

describe('Experimental2065Service', () => {
  let service: Experimental2065Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2065Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
