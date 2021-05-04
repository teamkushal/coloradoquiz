import { TestBed } from '@angular/core/testing';

import { Experimental2975Service } from './experimental2975.service';

describe('Experimental2975Service', () => {
  let service: Experimental2975Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2975Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
