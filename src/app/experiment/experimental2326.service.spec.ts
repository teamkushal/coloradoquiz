import { TestBed } from '@angular/core/testing';

import { Experimental2326Service } from './experimental2326.service';

describe('Experimental2326Service', () => {
  let service: Experimental2326Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2326Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
