import { TestBed } from '@angular/core/testing';

import { Experimental3433Service } from './experimental3433.service';

describe('Experimental3433Service', () => {
  let service: Experimental3433Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3433Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
