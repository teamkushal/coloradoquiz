import { TestBed } from '@angular/core/testing';

import { Experimental3796Service } from './experimental3796.service';

describe('Experimental3796Service', () => {
  let service: Experimental3796Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3796Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
