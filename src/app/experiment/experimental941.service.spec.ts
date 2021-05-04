import { TestBed } from '@angular/core/testing';

import { Experimental941Service } from './experimental941.service';

describe('Experimental941Service', () => {
  let service: Experimental941Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental941Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
