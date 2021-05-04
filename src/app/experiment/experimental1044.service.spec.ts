import { TestBed } from '@angular/core/testing';

import { Experimental1044Service } from './experimental1044.service';

describe('Experimental1044Service', () => {
  let service: Experimental1044Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1044Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
