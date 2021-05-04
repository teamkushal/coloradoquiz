import { TestBed } from '@angular/core/testing';

import { Experimental1524Service } from './experimental1524.service';

describe('Experimental1524Service', () => {
  let service: Experimental1524Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1524Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
