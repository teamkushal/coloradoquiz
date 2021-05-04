import { TestBed } from '@angular/core/testing';

import { Experimental2160Service } from './experimental2160.service';

describe('Experimental2160Service', () => {
  let service: Experimental2160Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2160Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
