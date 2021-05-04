import { TestBed } from '@angular/core/testing';

import { Experimental767Service } from './experimental767.service';

describe('Experimental767Service', () => {
  let service: Experimental767Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental767Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
