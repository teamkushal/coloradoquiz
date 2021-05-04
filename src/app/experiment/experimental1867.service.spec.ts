import { TestBed } from '@angular/core/testing';

import { Experimental1867Service } from './experimental1867.service';

describe('Experimental1867Service', () => {
  let service: Experimental1867Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1867Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
