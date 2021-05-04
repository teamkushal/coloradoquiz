import { TestBed } from '@angular/core/testing';

import { Experimental1002Service } from './experimental1002.service';

describe('Experimental1002Service', () => {
  let service: Experimental1002Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1002Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
