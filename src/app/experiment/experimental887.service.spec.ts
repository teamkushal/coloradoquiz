import { TestBed } from '@angular/core/testing';

import { Experimental887Service } from './experimental887.service';

describe('Experimental887Service', () => {
  let service: Experimental887Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental887Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
