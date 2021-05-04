import { TestBed } from '@angular/core/testing';

import { Experimental2046Service } from './experimental2046.service';

describe('Experimental2046Service', () => {
  let service: Experimental2046Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2046Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
