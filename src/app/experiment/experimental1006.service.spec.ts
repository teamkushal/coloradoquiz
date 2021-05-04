import { TestBed } from '@angular/core/testing';

import { Experimental1006Service } from './experimental1006.service';

describe('Experimental1006Service', () => {
  let service: Experimental1006Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1006Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
