import { TestBed } from '@angular/core/testing';

import { Experimental1009Service } from './experimental1009.service';

describe('Experimental1009Service', () => {
  let service: Experimental1009Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1009Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
