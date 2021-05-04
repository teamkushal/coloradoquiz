import { TestBed } from '@angular/core/testing';

import { Experimental3206Service } from './experimental3206.service';

describe('Experimental3206Service', () => {
  let service: Experimental3206Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3206Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
