import { TestBed } from '@angular/core/testing';

import { Experimental1307Service } from './experimental1307.service';

describe('Experimental1307Service', () => {
  let service: Experimental1307Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1307Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
