import { TestBed } from '@angular/core/testing';

import { Experimental1686Service } from './experimental1686.service';

describe('Experimental1686Service', () => {
  let service: Experimental1686Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1686Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
