import { TestBed } from '@angular/core/testing';

import { Experimental3636Service } from './experimental3636.service';

describe('Experimental3636Service', () => {
  let service: Experimental3636Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3636Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
