import { TestBed } from '@angular/core/testing';

import { Experimental1696Service } from './experimental1696.service';

describe('Experimental1696Service', () => {
  let service: Experimental1696Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1696Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
