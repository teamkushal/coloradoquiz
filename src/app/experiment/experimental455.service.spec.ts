import { TestBed } from '@angular/core/testing';

import { Experimental455Service } from './experimental455.service';

describe('Experimental455Service', () => {
  let service: Experimental455Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental455Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
