import { TestBed } from '@angular/core/testing';

import { Experimental1060Service } from './experimental1060.service';

describe('Experimental1060Service', () => {
  let service: Experimental1060Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1060Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
