import { TestBed } from '@angular/core/testing';

import { Experimental2779Service } from './experimental2779.service';

describe('Experimental2779Service', () => {
  let service: Experimental2779Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2779Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
