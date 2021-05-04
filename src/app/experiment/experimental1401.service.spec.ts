import { TestBed } from '@angular/core/testing';

import { Experimental1401Service } from './experimental1401.service';

describe('Experimental1401Service', () => {
  let service: Experimental1401Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1401Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
