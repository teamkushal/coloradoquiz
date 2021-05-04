import { TestBed } from '@angular/core/testing';

import { Experimental2556Service } from './experimental2556.service';

describe('Experimental2556Service', () => {
  let service: Experimental2556Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2556Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
