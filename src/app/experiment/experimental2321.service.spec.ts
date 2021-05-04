import { TestBed } from '@angular/core/testing';

import { Experimental2321Service } from './experimental2321.service';

describe('Experimental2321Service', () => {
  let service: Experimental2321Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2321Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
