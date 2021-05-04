import { TestBed } from '@angular/core/testing';

import { Experimental1574Service } from './experimental1574.service';

describe('Experimental1574Service', () => {
  let service: Experimental1574Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1574Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
