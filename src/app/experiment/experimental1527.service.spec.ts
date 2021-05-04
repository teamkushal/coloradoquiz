import { TestBed } from '@angular/core/testing';

import { Experimental1527Service } from './experimental1527.service';

describe('Experimental1527Service', () => {
  let service: Experimental1527Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1527Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
