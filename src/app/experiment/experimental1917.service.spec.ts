import { TestBed } from '@angular/core/testing';

import { Experimental1917Service } from './experimental1917.service';

describe('Experimental1917Service', () => {
  let service: Experimental1917Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1917Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
