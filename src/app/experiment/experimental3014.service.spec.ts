import { TestBed } from '@angular/core/testing';

import { Experimental3014Service } from './experimental3014.service';

describe('Experimental3014Service', () => {
  let service: Experimental3014Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3014Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
