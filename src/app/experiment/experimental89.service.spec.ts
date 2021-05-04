import { TestBed } from '@angular/core/testing';

import { Experimental89Service } from './experimental89.service';

describe('Experimental89Service', () => {
  let service: Experimental89Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental89Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
