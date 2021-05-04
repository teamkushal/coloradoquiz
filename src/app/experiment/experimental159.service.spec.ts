import { TestBed } from '@angular/core/testing';

import { Experimental159Service } from './experimental159.service';

describe('Experimental159Service', () => {
  let service: Experimental159Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental159Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
