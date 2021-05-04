import { TestBed } from '@angular/core/testing';

import { Experimental2964Service } from './experimental2964.service';

describe('Experimental2964Service', () => {
  let service: Experimental2964Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2964Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
