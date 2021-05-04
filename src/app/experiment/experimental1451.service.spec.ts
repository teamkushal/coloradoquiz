import { TestBed } from '@angular/core/testing';

import { Experimental1451Service } from './experimental1451.service';

describe('Experimental1451Service', () => {
  let service: Experimental1451Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1451Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
