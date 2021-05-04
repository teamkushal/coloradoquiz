import { TestBed } from '@angular/core/testing';

import { Experimental1811Service } from './experimental1811.service';

describe('Experimental1811Service', () => {
  let service: Experimental1811Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1811Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
