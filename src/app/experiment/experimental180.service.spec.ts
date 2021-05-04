import { TestBed } from '@angular/core/testing';

import { Experimental180Service } from './experimental180.service';

describe('Experimental180Service', () => {
  let service: Experimental180Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental180Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
