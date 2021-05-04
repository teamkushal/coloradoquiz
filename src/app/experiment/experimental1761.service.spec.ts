import { TestBed } from '@angular/core/testing';

import { Experimental1761Service } from './experimental1761.service';

describe('Experimental1761Service', () => {
  let service: Experimental1761Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1761Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
