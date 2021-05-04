import { TestBed } from '@angular/core/testing';

import { Experimental3937Service } from './experimental3937.service';

describe('Experimental3937Service', () => {
  let service: Experimental3937Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3937Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
