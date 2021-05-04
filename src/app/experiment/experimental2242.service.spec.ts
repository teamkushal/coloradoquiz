import { TestBed } from '@angular/core/testing';

import { Experimental2242Service } from './experimental2242.service';

describe('Experimental2242Service', () => {
  let service: Experimental2242Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2242Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
