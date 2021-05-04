import { TestBed } from '@angular/core/testing';

import { Experimental598Service } from './experimental598.service';

describe('Experimental598Service', () => {
  let service: Experimental598Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental598Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
