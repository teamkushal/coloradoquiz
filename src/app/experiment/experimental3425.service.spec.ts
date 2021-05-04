import { TestBed } from '@angular/core/testing';

import { Experimental3425Service } from './experimental3425.service';

describe('Experimental3425Service', () => {
  let service: Experimental3425Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3425Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
