import { TestBed } from '@angular/core/testing';

import { Experimental3718Service } from './experimental3718.service';

describe('Experimental3718Service', () => {
  let service: Experimental3718Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3718Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
