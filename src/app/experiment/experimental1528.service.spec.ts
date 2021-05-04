import { TestBed } from '@angular/core/testing';

import { Experimental1528Service } from './experimental1528.service';

describe('Experimental1528Service', () => {
  let service: Experimental1528Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1528Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
