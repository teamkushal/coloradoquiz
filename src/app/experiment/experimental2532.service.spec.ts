import { TestBed } from '@angular/core/testing';

import { Experimental2532Service } from './experimental2532.service';

describe('Experimental2532Service', () => {
  let service: Experimental2532Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2532Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
