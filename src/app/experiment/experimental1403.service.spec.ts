import { TestBed } from '@angular/core/testing';

import { Experimental1403Service } from './experimental1403.service';

describe('Experimental1403Service', () => {
  let service: Experimental1403Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1403Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
