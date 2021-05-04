import { TestBed } from '@angular/core/testing';

import { Experimental3334Service } from './experimental3334.service';

describe('Experimental3334Service', () => {
  let service: Experimental3334Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3334Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
