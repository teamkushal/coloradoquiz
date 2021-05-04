import { TestBed } from '@angular/core/testing';

import { Experimental3099Service } from './experimental3099.service';

describe('Experimental3099Service', () => {
  let service: Experimental3099Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3099Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
