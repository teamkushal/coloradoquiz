import { TestBed } from '@angular/core/testing';

import { Experimental2555Service } from './experimental2555.service';

describe('Experimental2555Service', () => {
  let service: Experimental2555Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2555Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
