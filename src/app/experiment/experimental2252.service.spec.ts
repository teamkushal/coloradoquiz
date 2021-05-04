import { TestBed } from '@angular/core/testing';

import { Experimental2252Service } from './experimental2252.service';

describe('Experimental2252Service', () => {
  let service: Experimental2252Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2252Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
