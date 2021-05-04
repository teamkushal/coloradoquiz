import { TestBed } from '@angular/core/testing';

import { Experimental1737Service } from './experimental1737.service';

describe('Experimental1737Service', () => {
  let service: Experimental1737Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1737Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
