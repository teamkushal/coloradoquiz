import { TestBed } from '@angular/core/testing';

import { Experimental1810Service } from './experimental1810.service';

describe('Experimental1810Service', () => {
  let service: Experimental1810Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1810Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
