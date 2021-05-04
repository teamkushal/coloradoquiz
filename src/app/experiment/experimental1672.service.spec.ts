import { TestBed } from '@angular/core/testing';

import { Experimental1672Service } from './experimental1672.service';

describe('Experimental1672Service', () => {
  let service: Experimental1672Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1672Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
