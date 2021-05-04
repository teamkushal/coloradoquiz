import { TestBed } from '@angular/core/testing';

import { Experimental3945Service } from './experimental3945.service';

describe('Experimental3945Service', () => {
  let service: Experimental3945Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3945Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
