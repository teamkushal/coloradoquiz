import { TestBed } from '@angular/core/testing';

import { Experimental2857Service } from './experimental2857.service';

describe('Experimental2857Service', () => {
  let service: Experimental2857Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2857Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
