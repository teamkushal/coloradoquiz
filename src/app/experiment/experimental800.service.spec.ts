import { TestBed } from '@angular/core/testing';

import { Experimental800Service } from './experimental800.service';

describe('Experimental800Service', () => {
  let service: Experimental800Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental800Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
