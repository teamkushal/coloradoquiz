import { TestBed } from '@angular/core/testing';

import { Experimental533Service } from './experimental533.service';

describe('Experimental533Service', () => {
  let service: Experimental533Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental533Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
