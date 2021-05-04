import { TestBed } from '@angular/core/testing';

import { Experimental1235Service } from './experimental1235.service';

describe('Experimental1235Service', () => {
  let service: Experimental1235Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1235Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
