import { TestBed } from '@angular/core/testing';

import { Experimental3235Service } from './experimental3235.service';

describe('Experimental3235Service', () => {
  let service: Experimental3235Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3235Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
