import { TestBed } from '@angular/core/testing';

import { Experimental3356Service } from './experimental3356.service';

describe('Experimental3356Service', () => {
  let service: Experimental3356Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3356Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
