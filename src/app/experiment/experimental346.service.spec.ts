import { TestBed } from '@angular/core/testing';

import { Experimental346Service } from './experimental346.service';

describe('Experimental346Service', () => {
  let service: Experimental346Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental346Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
