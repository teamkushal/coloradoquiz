import { TestBed } from '@angular/core/testing';

import { Experimental1529Service } from './experimental1529.service';

describe('Experimental1529Service', () => {
  let service: Experimental1529Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1529Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
