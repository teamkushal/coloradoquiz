import { TestBed } from '@angular/core/testing';

import { Experimental585Service } from './experimental585.service';

describe('Experimental585Service', () => {
  let service: Experimental585Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental585Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
