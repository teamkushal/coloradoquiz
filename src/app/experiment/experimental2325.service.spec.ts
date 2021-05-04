import { TestBed } from '@angular/core/testing';

import { Experimental2325Service } from './experimental2325.service';

describe('Experimental2325Service', () => {
  let service: Experimental2325Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2325Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
