import { TestBed } from '@angular/core/testing';

import { Experimental1815Service } from './experimental1815.service';

describe('Experimental1815Service', () => {
  let service: Experimental1815Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1815Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
