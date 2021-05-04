import { TestBed } from '@angular/core/testing';

import { Experimental1855Service } from './experimental1855.service';

describe('Experimental1855Service', () => {
  let service: Experimental1855Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1855Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
