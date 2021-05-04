import { TestBed } from '@angular/core/testing';

import { Experimental72Service } from './experimental72.service';

describe('Experimental72Service', () => {
  let service: Experimental72Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental72Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
