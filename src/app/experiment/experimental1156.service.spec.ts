import { TestBed } from '@angular/core/testing';

import { Experimental1156Service } from './experimental1156.service';

describe('Experimental1156Service', () => {
  let service: Experimental1156Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1156Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
