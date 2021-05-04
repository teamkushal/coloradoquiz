import { TestBed } from '@angular/core/testing';

import { Experimental3637Service } from './experimental3637.service';

describe('Experimental3637Service', () => {
  let service: Experimental3637Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3637Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
