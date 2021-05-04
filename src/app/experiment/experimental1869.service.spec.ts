import { TestBed } from '@angular/core/testing';

import { Experimental1869Service } from './experimental1869.service';

describe('Experimental1869Service', () => {
  let service: Experimental1869Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1869Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
