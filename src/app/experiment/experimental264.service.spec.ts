import { TestBed } from '@angular/core/testing';

import { Experimental264Service } from './experimental264.service';

describe('Experimental264Service', () => {
  let service: Experimental264Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental264Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
