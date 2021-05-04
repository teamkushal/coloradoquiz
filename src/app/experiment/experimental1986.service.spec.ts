import { TestBed } from '@angular/core/testing';

import { Experimental1986Service } from './experimental1986.service';

describe('Experimental1986Service', () => {
  let service: Experimental1986Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1986Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
