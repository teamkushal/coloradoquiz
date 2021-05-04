import { TestBed } from '@angular/core/testing';

import { Experimental1631Service } from './experimental1631.service';

describe('Experimental1631Service', () => {
  let service: Experimental1631Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1631Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
