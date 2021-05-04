import { TestBed } from '@angular/core/testing';

import { Experimental1142Service } from './experimental1142.service';

describe('Experimental1142Service', () => {
  let service: Experimental1142Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1142Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
