import { TestBed } from '@angular/core/testing';

import { Experimental2722Service } from './experimental2722.service';

describe('Experimental2722Service', () => {
  let service: Experimental2722Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2722Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
