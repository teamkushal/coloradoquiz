import { TestBed } from '@angular/core/testing';

import { Experimental3339Service } from './experimental3339.service';

describe('Experimental3339Service', () => {
  let service: Experimental3339Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3339Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
