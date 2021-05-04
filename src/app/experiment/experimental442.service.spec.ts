import { TestBed } from '@angular/core/testing';

import { Experimental442Service } from './experimental442.service';

describe('Experimental442Service', () => {
  let service: Experimental442Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental442Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
