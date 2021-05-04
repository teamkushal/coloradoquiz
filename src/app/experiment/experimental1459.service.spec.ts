import { TestBed } from '@angular/core/testing';

import { Experimental1459Service } from './experimental1459.service';

describe('Experimental1459Service', () => {
  let service: Experimental1459Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1459Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
