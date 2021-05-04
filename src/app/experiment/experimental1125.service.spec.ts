import { TestBed } from '@angular/core/testing';

import { Experimental1125Service } from './experimental1125.service';

describe('Experimental1125Service', () => {
  let service: Experimental1125Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1125Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
