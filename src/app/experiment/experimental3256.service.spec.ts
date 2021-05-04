import { TestBed } from '@angular/core/testing';

import { Experimental3256Service } from './experimental3256.service';

describe('Experimental3256Service', () => {
  let service: Experimental3256Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3256Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
