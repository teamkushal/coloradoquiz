import { TestBed } from '@angular/core/testing';

import { Experimental3186Service } from './experimental3186.service';

describe('Experimental3186Service', () => {
  let service: Experimental3186Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3186Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
