import { TestBed } from '@angular/core/testing';

import { Experimental1663Service } from './experimental1663.service';

describe('Experimental1663Service', () => {
  let service: Experimental1663Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1663Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
