import { TestBed } from '@angular/core/testing';

import { Experimental1700Service } from './experimental1700.service';

describe('Experimental1700Service', () => {
  let service: Experimental1700Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1700Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
