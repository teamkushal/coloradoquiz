import { TestBed } from '@angular/core/testing';

import { Experimental560Service } from './experimental560.service';

describe('Experimental560Service', () => {
  let service: Experimental560Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental560Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
