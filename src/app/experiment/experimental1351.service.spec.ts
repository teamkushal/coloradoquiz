import { TestBed } from '@angular/core/testing';

import { Experimental1351Service } from './experimental1351.service';

describe('Experimental1351Service', () => {
  let service: Experimental1351Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1351Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
