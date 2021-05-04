import { TestBed } from '@angular/core/testing';

import { Experimental1422Service } from './experimental1422.service';

describe('Experimental1422Service', () => {
  let service: Experimental1422Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1422Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
