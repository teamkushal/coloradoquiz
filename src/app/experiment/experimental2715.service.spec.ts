import { TestBed } from '@angular/core/testing';

import { Experimental2715Service } from './experimental2715.service';

describe('Experimental2715Service', () => {
  let service: Experimental2715Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2715Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
