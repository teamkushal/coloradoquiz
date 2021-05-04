import { TestBed } from '@angular/core/testing';

import { Experimental22Service } from './experimental22.service';

describe('Experimental22Service', () => {
  let service: Experimental22Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental22Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
