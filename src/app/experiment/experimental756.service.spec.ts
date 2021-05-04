import { TestBed } from '@angular/core/testing';

import { Experimental756Service } from './experimental756.service';

describe('Experimental756Service', () => {
  let service: Experimental756Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental756Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
