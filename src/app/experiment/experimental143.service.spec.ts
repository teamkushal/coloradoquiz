import { TestBed } from '@angular/core/testing';

import { Experimental143Service } from './experimental143.service';

describe('Experimental143Service', () => {
  let service: Experimental143Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental143Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
