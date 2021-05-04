import { TestBed } from '@angular/core/testing';

import { Experimental1650Service } from './experimental1650.service';

describe('Experimental1650Service', () => {
  let service: Experimental1650Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1650Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
