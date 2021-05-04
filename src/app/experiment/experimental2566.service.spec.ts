import { TestBed } from '@angular/core/testing';

import { Experimental2566Service } from './experimental2566.service';

describe('Experimental2566Service', () => {
  let service: Experimental2566Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2566Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
