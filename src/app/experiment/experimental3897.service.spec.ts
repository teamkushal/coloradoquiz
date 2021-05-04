import { TestBed } from '@angular/core/testing';

import { Experimental3897Service } from './experimental3897.service';

describe('Experimental3897Service', () => {
  let service: Experimental3897Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3897Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
