import { TestBed } from '@angular/core/testing';

import { Experimental2073Service } from './experimental2073.service';

describe('Experimental2073Service', () => {
  let service: Experimental2073Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2073Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
