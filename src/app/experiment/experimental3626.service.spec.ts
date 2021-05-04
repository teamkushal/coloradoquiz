import { TestBed } from '@angular/core/testing';

import { Experimental3626Service } from './experimental3626.service';

describe('Experimental3626Service', () => {
  let service: Experimental3626Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3626Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
