import { TestBed } from '@angular/core/testing';

import { Experimental2446Service } from './experimental2446.service';

describe('Experimental2446Service', () => {
  let service: Experimental2446Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2446Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
