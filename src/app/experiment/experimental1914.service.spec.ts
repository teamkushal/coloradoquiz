import { TestBed } from '@angular/core/testing';

import { Experimental1914Service } from './experimental1914.service';

describe('Experimental1914Service', () => {
  let service: Experimental1914Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1914Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
