import { TestBed } from '@angular/core/testing';

import { Experimental1031Service } from './experimental1031.service';

describe('Experimental1031Service', () => {
  let service: Experimental1031Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1031Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
