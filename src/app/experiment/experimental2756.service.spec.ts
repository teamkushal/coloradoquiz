import { TestBed } from '@angular/core/testing';

import { Experimental2756Service } from './experimental2756.service';

describe('Experimental2756Service', () => {
  let service: Experimental2756Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2756Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
