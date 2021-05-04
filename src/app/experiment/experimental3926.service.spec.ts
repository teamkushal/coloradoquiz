import { TestBed } from '@angular/core/testing';

import { Experimental3926Service } from './experimental3926.service';

describe('Experimental3926Service', () => {
  let service: Experimental3926Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3926Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
