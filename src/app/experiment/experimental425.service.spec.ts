import { TestBed } from '@angular/core/testing';

import { Experimental425Service } from './experimental425.service';

describe('Experimental425Service', () => {
  let service: Experimental425Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental425Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
