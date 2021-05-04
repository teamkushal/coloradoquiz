import { TestBed } from '@angular/core/testing';

import { Experimental2068Service } from './experimental2068.service';

describe('Experimental2068Service', () => {
  let service: Experimental2068Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2068Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
