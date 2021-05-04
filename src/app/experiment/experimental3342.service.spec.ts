import { TestBed } from '@angular/core/testing';

import { Experimental3342Service } from './experimental3342.service';

describe('Experimental3342Service', () => {
  let service: Experimental3342Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3342Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
