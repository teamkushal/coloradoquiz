import { TestBed } from '@angular/core/testing';

import { Experimental3459Service } from './experimental3459.service';

describe('Experimental3459Service', () => {
  let service: Experimental3459Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3459Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
