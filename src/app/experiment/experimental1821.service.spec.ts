import { TestBed } from '@angular/core/testing';

import { Experimental1821Service } from './experimental1821.service';

describe('Experimental1821Service', () => {
  let service: Experimental1821Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1821Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
