import { TestBed } from '@angular/core/testing';

import { Experimental1902Service } from './experimental1902.service';

describe('Experimental1902Service', () => {
  let service: Experimental1902Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1902Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
