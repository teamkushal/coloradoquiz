import { TestBed } from '@angular/core/testing';

import { Experimental1572Service } from './experimental1572.service';

describe('Experimental1572Service', () => {
  let service: Experimental1572Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1572Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
