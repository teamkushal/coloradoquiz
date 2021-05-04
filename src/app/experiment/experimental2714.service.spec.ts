import { TestBed } from '@angular/core/testing';

import { Experimental2714Service } from './experimental2714.service';

describe('Experimental2714Service', () => {
  let service: Experimental2714Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2714Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
