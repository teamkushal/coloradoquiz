import { TestBed } from '@angular/core/testing';

import { Experimental2613Service } from './experimental2613.service';

describe('Experimental2613Service', () => {
  let service: Experimental2613Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2613Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
