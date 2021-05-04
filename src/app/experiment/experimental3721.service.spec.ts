import { TestBed } from '@angular/core/testing';

import { Experimental3721Service } from './experimental3721.service';

describe('Experimental3721Service', () => {
  let service: Experimental3721Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3721Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
