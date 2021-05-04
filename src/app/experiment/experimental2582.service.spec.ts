import { TestBed } from '@angular/core/testing';

import { Experimental2582Service } from './experimental2582.service';

describe('Experimental2582Service', () => {
  let service: Experimental2582Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2582Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
