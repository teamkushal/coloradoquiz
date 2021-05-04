import { TestBed } from '@angular/core/testing';

import { Experimental1330Service } from './experimental1330.service';

describe('Experimental1330Service', () => {
  let service: Experimental1330Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1330Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
