import { TestBed } from '@angular/core/testing';

import { Experimental1289Service } from './experimental1289.service';

describe('Experimental1289Service', () => {
  let service: Experimental1289Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1289Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
