import { TestBed } from '@angular/core/testing';

import { Experimental1561Service } from './experimental1561.service';

describe('Experimental1561Service', () => {
  let service: Experimental1561Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1561Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
