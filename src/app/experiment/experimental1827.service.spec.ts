import { TestBed } from '@angular/core/testing';

import { Experimental1827Service } from './experimental1827.service';

describe('Experimental1827Service', () => {
  let service: Experimental1827Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1827Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
