import { TestBed } from '@angular/core/testing';

import { Experimental1101Service } from './experimental1101.service';

describe('Experimental1101Service', () => {
  let service: Experimental1101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
