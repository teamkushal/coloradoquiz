import { TestBed } from '@angular/core/testing';

import { Experimental1494Service } from './experimental1494.service';

describe('Experimental1494Service', () => {
  let service: Experimental1494Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1494Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
