import { TestBed } from '@angular/core/testing';

import { Experimental201Service } from './experimental201.service';

describe('Experimental201Service', () => {
  let service: Experimental201Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental201Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
