import { TestBed } from '@angular/core/testing';

import { Experimental1211Service } from './experimental1211.service';

describe('Experimental1211Service', () => {
  let service: Experimental1211Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1211Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
