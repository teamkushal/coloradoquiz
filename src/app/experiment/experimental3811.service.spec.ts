import { TestBed } from '@angular/core/testing';

import { Experimental3811Service } from './experimental3811.service';

describe('Experimental3811Service', () => {
  let service: Experimental3811Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3811Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
