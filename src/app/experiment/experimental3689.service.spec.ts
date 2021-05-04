import { TestBed } from '@angular/core/testing';

import { Experimental3689Service } from './experimental3689.service';

describe('Experimental3689Service', () => {
  let service: Experimental3689Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3689Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
