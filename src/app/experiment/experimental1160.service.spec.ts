import { TestBed } from '@angular/core/testing';

import { Experimental1160Service } from './experimental1160.service';

describe('Experimental1160Service', () => {
  let service: Experimental1160Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1160Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
