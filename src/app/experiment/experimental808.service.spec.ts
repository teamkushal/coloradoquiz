import { TestBed } from '@angular/core/testing';

import { Experimental808Service } from './experimental808.service';

describe('Experimental808Service', () => {
  let service: Experimental808Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental808Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
