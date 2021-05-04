import { TestBed } from '@angular/core/testing';

import { Experimental3848Service } from './experimental3848.service';

describe('Experimental3848Service', () => {
  let service: Experimental3848Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3848Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
