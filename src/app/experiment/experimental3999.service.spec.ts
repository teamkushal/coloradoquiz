import { TestBed } from '@angular/core/testing';

import { Experimental3999Service } from './experimental3999.service';

describe('Experimental3999Service', () => {
  let service: Experimental3999Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3999Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
