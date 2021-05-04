import { TestBed } from '@angular/core/testing';

import { Experimental2150Service } from './experimental2150.service';

describe('Experimental2150Service', () => {
  let service: Experimental2150Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2150Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
