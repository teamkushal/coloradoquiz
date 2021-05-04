import { TestBed } from '@angular/core/testing';

import { Experimental3364Service } from './experimental3364.service';

describe('Experimental3364Service', () => {
  let service: Experimental3364Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3364Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
