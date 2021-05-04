import { TestBed } from '@angular/core/testing';

import { Experimental187Service } from './experimental187.service';

describe('Experimental187Service', () => {
  let service: Experimental187Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental187Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
