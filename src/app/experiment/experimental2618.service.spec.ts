import { TestBed } from '@angular/core/testing';

import { Experimental2618Service } from './experimental2618.service';

describe('Experimental2618Service', () => {
  let service: Experimental2618Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2618Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
