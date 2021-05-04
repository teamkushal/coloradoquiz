import { TestBed } from '@angular/core/testing';

import { Experimental768Service } from './experimental768.service';

describe('Experimental768Service', () => {
  let service: Experimental768Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental768Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
