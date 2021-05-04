import { TestBed } from '@angular/core/testing';

import { Experimental3455Service } from './experimental3455.service';

describe('Experimental3455Service', () => {
  let service: Experimental3455Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3455Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
