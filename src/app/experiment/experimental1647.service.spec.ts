import { TestBed } from '@angular/core/testing';

import { Experimental1647Service } from './experimental1647.service';

describe('Experimental1647Service', () => {
  let service: Experimental1647Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1647Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
