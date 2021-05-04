import { TestBed } from '@angular/core/testing';

import { Experimental3321Service } from './experimental3321.service';

describe('Experimental3321Service', () => {
  let service: Experimental3321Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3321Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
