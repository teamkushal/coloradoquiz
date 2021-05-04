import { TestBed } from '@angular/core/testing';

import { Experimental3673Service } from './experimental3673.service';

describe('Experimental3673Service', () => {
  let service: Experimental3673Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3673Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
