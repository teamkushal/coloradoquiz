import { TestBed } from '@angular/core/testing';

import { Experimental2590Service } from './experimental2590.service';

describe('Experimental2590Service', () => {
  let service: Experimental2590Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2590Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
