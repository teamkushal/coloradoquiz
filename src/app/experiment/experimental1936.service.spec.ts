import { TestBed } from '@angular/core/testing';

import { Experimental1936Service } from './experimental1936.service';

describe('Experimental1936Service', () => {
  let service: Experimental1936Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1936Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
