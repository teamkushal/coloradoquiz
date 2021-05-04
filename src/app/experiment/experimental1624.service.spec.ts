import { TestBed } from '@angular/core/testing';

import { Experimental1624Service } from './experimental1624.service';

describe('Experimental1624Service', () => {
  let service: Experimental1624Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1624Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
