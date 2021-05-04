import { TestBed } from '@angular/core/testing';

import { Experimental3076Service } from './experimental3076.service';

describe('Experimental3076Service', () => {
  let service: Experimental3076Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3076Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
