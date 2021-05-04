import { TestBed } from '@angular/core/testing';

import { Experimental1525Service } from './experimental1525.service';

describe('Experimental1525Service', () => {
  let service: Experimental1525Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1525Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
