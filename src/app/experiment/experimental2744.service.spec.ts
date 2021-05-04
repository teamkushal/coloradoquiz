import { TestBed } from '@angular/core/testing';

import { Experimental2744Service } from './experimental2744.service';

describe('Experimental2744Service', () => {
  let service: Experimental2744Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2744Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
