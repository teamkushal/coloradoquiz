import { TestBed } from '@angular/core/testing';

import { Experimental530Service } from './experimental530.service';

describe('Experimental530Service', () => {
  let service: Experimental530Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental530Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
