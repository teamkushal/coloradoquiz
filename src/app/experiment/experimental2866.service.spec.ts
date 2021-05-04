import { TestBed } from '@angular/core/testing';

import { Experimental2866Service } from './experimental2866.service';

describe('Experimental2866Service', () => {
  let service: Experimental2866Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2866Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
