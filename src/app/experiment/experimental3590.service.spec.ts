import { TestBed } from '@angular/core/testing';

import { Experimental3590Service } from './experimental3590.service';

describe('Experimental3590Service', () => {
  let service: Experimental3590Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3590Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
