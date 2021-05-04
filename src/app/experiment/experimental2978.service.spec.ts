import { TestBed } from '@angular/core/testing';

import { Experimental2978Service } from './experimental2978.service';

describe('Experimental2978Service', () => {
  let service: Experimental2978Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2978Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
