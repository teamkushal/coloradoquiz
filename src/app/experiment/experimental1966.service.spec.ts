import { TestBed } from '@angular/core/testing';

import { Experimental1966Service } from './experimental1966.service';

describe('Experimental1966Service', () => {
  let service: Experimental1966Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1966Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
