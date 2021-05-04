import { TestBed } from '@angular/core/testing';

import { Experimental1981Service } from './experimental1981.service';

describe('Experimental1981Service', () => {
  let service: Experimental1981Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1981Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
