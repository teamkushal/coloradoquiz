import { TestBed } from '@angular/core/testing';

import { Experimental14Service } from './experimental14.service';

describe('Experimental14Service', () => {
  let service: Experimental14Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental14Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
