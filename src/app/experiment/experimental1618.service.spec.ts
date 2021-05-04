import { TestBed } from '@angular/core/testing';

import { Experimental1618Service } from './experimental1618.service';

describe('Experimental1618Service', () => {
  let service: Experimental1618Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1618Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
