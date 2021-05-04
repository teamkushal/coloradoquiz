import { TestBed } from '@angular/core/testing';

import { Experimental1557Service } from './experimental1557.service';

describe('Experimental1557Service', () => {
  let service: Experimental1557Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1557Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
