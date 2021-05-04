import { TestBed } from '@angular/core/testing';

import { Experimental2098Service } from './experimental2098.service';

describe('Experimental2098Service', () => {
  let service: Experimental2098Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2098Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
