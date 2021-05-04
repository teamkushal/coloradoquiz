import { TestBed } from '@angular/core/testing';

import { Experimental1433Service } from './experimental1433.service';

describe('Experimental1433Service', () => {
  let service: Experimental1433Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1433Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
