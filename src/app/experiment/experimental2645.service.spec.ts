import { TestBed } from '@angular/core/testing';

import { Experimental2645Service } from './experimental2645.service';

describe('Experimental2645Service', () => {
  let service: Experimental2645Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2645Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
