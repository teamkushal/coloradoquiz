import { TestBed } from '@angular/core/testing';

import { Experimental1754Service } from './experimental1754.service';

describe('Experimental1754Service', () => {
  let service: Experimental1754Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1754Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
