import { TestBed } from '@angular/core/testing';

import { Experimental1027Service } from './experimental1027.service';

describe('Experimental1027Service', () => {
  let service: Experimental1027Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1027Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
