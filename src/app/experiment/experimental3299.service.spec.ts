import { TestBed } from '@angular/core/testing';

import { Experimental3299Service } from './experimental3299.service';

describe('Experimental3299Service', () => {
  let service: Experimental3299Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3299Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
