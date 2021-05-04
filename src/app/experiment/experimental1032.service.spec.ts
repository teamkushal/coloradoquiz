import { TestBed } from '@angular/core/testing';

import { Experimental1032Service } from './experimental1032.service';

describe('Experimental1032Service', () => {
  let service: Experimental1032Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1032Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
