import { TestBed } from '@angular/core/testing';

import { Experimental1893Service } from './experimental1893.service';

describe('Experimental1893Service', () => {
  let service: Experimental1893Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1893Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
