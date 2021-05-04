import { TestBed } from '@angular/core/testing';

import { Experimental1184Service } from './experimental1184.service';

describe('Experimental1184Service', () => {
  let service: Experimental1184Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1184Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
