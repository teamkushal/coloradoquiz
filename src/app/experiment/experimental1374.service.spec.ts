import { TestBed } from '@angular/core/testing';

import { Experimental1374Service } from './experimental1374.service';

describe('Experimental1374Service', () => {
  let service: Experimental1374Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1374Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
