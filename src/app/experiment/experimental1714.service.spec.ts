import { TestBed } from '@angular/core/testing';

import { Experimental1714Service } from './experimental1714.service';

describe('Experimental1714Service', () => {
  let service: Experimental1714Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1714Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
