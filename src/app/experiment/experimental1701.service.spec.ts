import { TestBed } from '@angular/core/testing';

import { Experimental1701Service } from './experimental1701.service';

describe('Experimental1701Service', () => {
  let service: Experimental1701Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1701Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
