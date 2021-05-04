import { TestBed } from '@angular/core/testing';

import { Experimental1167Service } from './experimental1167.service';

describe('Experimental1167Service', () => {
  let service: Experimental1167Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1167Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
