import { TestBed } from '@angular/core/testing';

import { Experimental1547Service } from './experimental1547.service';

describe('Experimental1547Service', () => {
  let service: Experimental1547Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1547Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
