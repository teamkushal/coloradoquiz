import { TestBed } from '@angular/core/testing';

import { Experimental1688Service } from './experimental1688.service';

describe('Experimental1688Service', () => {
  let service: Experimental1688Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1688Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
