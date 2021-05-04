import { TestBed } from '@angular/core/testing';

import { Experimental3156Service } from './experimental3156.service';

describe('Experimental3156Service', () => {
  let service: Experimental3156Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3156Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
