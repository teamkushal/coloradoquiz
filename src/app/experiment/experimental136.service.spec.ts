import { TestBed } from '@angular/core/testing';

import { Experimental136Service } from './experimental136.service';

describe('Experimental136Service', () => {
  let service: Experimental136Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental136Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
