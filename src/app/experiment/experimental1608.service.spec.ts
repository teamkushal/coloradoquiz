import { TestBed } from '@angular/core/testing';

import { Experimental1608Service } from './experimental1608.service';

describe('Experimental1608Service', () => {
  let service: Experimental1608Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1608Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
