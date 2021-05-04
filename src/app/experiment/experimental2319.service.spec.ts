import { TestBed } from '@angular/core/testing';

import { Experimental2319Service } from './experimental2319.service';

describe('Experimental2319Service', () => {
  let service: Experimental2319Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2319Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
