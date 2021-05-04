import { TestBed } from '@angular/core/testing';

import { Experimental2120Service } from './experimental2120.service';

describe('Experimental2120Service', () => {
  let service: Experimental2120Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2120Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
