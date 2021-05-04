import { TestBed } from '@angular/core/testing';

import { Experimental1116Service } from './experimental1116.service';

describe('Experimental1116Service', () => {
  let service: Experimental1116Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1116Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
