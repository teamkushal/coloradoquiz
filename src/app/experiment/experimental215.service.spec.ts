import { TestBed } from '@angular/core/testing';

import { Experimental215Service } from './experimental215.service';

describe('Experimental215Service', () => {
  let service: Experimental215Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental215Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
