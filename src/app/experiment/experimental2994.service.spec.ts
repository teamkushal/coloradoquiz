import { TestBed } from '@angular/core/testing';

import { Experimental2994Service } from './experimental2994.service';

describe('Experimental2994Service', () => {
  let service: Experimental2994Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2994Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
