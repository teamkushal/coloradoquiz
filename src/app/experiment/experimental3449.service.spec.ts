import { TestBed } from '@angular/core/testing';

import { Experimental3449Service } from './experimental3449.service';

describe('Experimental3449Service', () => {
  let service: Experimental3449Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3449Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
