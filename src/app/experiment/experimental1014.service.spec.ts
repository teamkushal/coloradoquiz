import { TestBed } from '@angular/core/testing';

import { Experimental1014Service } from './experimental1014.service';

describe('Experimental1014Service', () => {
  let service: Experimental1014Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1014Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
