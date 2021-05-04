import { TestBed } from '@angular/core/testing';

import { Experimental1345Service } from './experimental1345.service';

describe('Experimental1345Service', () => {
  let service: Experimental1345Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1345Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
