import { TestBed } from '@angular/core/testing';

import { Experimental3440Service } from './experimental3440.service';

describe('Experimental3440Service', () => {
  let service: Experimental3440Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3440Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
