import { TestBed } from '@angular/core/testing';

import { Experimental1464Service } from './experimental1464.service';

describe('Experimental1464Service', () => {
  let service: Experimental1464Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1464Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
