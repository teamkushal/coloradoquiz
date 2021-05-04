import { TestBed } from '@angular/core/testing';

import { Experimental1212Service } from './experimental1212.service';

describe('Experimental1212Service', () => {
  let service: Experimental1212Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1212Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
