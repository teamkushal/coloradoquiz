import { TestBed } from '@angular/core/testing';

import { Experimental3040Service } from './experimental3040.service';

describe('Experimental3040Service', () => {
  let service: Experimental3040Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3040Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
