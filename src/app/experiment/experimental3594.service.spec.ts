import { TestBed } from '@angular/core/testing';

import { Experimental3594Service } from './experimental3594.service';

describe('Experimental3594Service', () => {
  let service: Experimental3594Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3594Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
