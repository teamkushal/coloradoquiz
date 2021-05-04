import { TestBed } from '@angular/core/testing';

import { Experimental1806Service } from './experimental1806.service';

describe('Experimental1806Service', () => {
  let service: Experimental1806Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1806Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
