import { TestBed } from '@angular/core/testing';

import { Experimental1365Service } from './experimental1365.service';

describe('Experimental1365Service', () => {
  let service: Experimental1365Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1365Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
