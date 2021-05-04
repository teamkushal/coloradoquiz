import { TestBed } from '@angular/core/testing';

import { Experimental3870Service } from './experimental3870.service';

describe('Experimental3870Service', () => {
  let service: Experimental3870Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3870Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
