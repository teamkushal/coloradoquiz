import { TestBed } from '@angular/core/testing';

import { Experimental2428Service } from './experimental2428.service';

describe('Experimental2428Service', () => {
  let service: Experimental2428Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2428Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
