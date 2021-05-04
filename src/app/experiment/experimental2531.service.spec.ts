import { TestBed } from '@angular/core/testing';

import { Experimental2531Service } from './experimental2531.service';

describe('Experimental2531Service', () => {
  let service: Experimental2531Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2531Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
