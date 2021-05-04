import { TestBed } from '@angular/core/testing';

import { Experimental1176Service } from './experimental1176.service';

describe('Experimental1176Service', () => {
  let service: Experimental1176Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1176Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
