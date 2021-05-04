import { TestBed } from '@angular/core/testing';

import { Experimental791Service } from './experimental791.service';

describe('Experimental791Service', () => {
  let service: Experimental791Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental791Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
