import { TestBed } from '@angular/core/testing';

import { Experimental176Service } from './experimental176.service';

describe('Experimental176Service', () => {
  let service: Experimental176Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental176Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
