import { TestBed } from '@angular/core/testing';

import { Experimental1079Service } from './experimental1079.service';

describe('Experimental1079Service', () => {
  let service: Experimental1079Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1079Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
