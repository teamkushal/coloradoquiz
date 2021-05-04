import { TestBed } from '@angular/core/testing';

import { Experimental1490Service } from './experimental1490.service';

describe('Experimental1490Service', () => {
  let service: Experimental1490Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1490Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
