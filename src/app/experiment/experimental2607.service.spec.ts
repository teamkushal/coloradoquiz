import { TestBed } from '@angular/core/testing';

import { Experimental2607Service } from './experimental2607.service';

describe('Experimental2607Service', () => {
  let service: Experimental2607Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2607Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
