import { TestBed } from '@angular/core/testing';

import { Experimental2675Service } from './experimental2675.service';

describe('Experimental2675Service', () => {
  let service: Experimental2675Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2675Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
