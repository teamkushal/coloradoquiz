import { TestBed } from '@angular/core/testing';

import { Experimental1129Service } from './experimental1129.service';

describe('Experimental1129Service', () => {
  let service: Experimental1129Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1129Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
