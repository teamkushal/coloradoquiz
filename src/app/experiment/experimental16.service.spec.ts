import { TestBed } from '@angular/core/testing';

import { Experimental16Service } from './experimental16.service';

describe('Experimental16Service', () => {
  let service: Experimental16Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental16Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
