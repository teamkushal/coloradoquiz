import { TestBed } from '@angular/core/testing';

import { Experimental1449Service } from './experimental1449.service';

describe('Experimental1449Service', () => {
  let service: Experimental1449Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1449Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
