import { TestBed } from '@angular/core/testing';

import { Experimental2651Service } from './experimental2651.service';

describe('Experimental2651Service', () => {
  let service: Experimental2651Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2651Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
