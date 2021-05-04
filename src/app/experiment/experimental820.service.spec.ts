import { TestBed } from '@angular/core/testing';

import { Experimental820Service } from './experimental820.service';

describe('Experimental820Service', () => {
  let service: Experimental820Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental820Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
