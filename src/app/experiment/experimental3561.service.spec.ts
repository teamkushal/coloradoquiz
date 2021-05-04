import { TestBed } from '@angular/core/testing';

import { Experimental3561Service } from './experimental3561.service';

describe('Experimental3561Service', () => {
  let service: Experimental3561Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3561Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
