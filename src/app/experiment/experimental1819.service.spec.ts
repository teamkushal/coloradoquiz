import { TestBed } from '@angular/core/testing';

import { Experimental1819Service } from './experimental1819.service';

describe('Experimental1819Service', () => {
  let service: Experimental1819Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1819Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
