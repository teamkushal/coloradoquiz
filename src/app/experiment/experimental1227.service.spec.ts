import { TestBed } from '@angular/core/testing';

import { Experimental1227Service } from './experimental1227.service';

describe('Experimental1227Service', () => {
  let service: Experimental1227Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1227Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
