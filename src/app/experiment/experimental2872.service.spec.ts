import { TestBed } from '@angular/core/testing';

import { Experimental2872Service } from './experimental2872.service';

describe('Experimental2872Service', () => {
  let service: Experimental2872Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2872Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
