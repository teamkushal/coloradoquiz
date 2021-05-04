import { TestBed } from '@angular/core/testing';

import { Experimental2249Service } from './experimental2249.service';

describe('Experimental2249Service', () => {
  let service: Experimental2249Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2249Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
