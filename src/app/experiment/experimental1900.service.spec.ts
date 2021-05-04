import { TestBed } from '@angular/core/testing';

import { Experimental1900Service } from './experimental1900.service';

describe('Experimental1900Service', () => {
  let service: Experimental1900Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1900Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
