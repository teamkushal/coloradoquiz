import { TestBed } from '@angular/core/testing';

import { Experimental3722Service } from './experimental3722.service';

describe('Experimental3722Service', () => {
  let service: Experimental3722Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3722Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
