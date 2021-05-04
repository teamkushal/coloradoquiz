import { TestBed } from '@angular/core/testing';

import { Experimental915Service } from './experimental915.service';

describe('Experimental915Service', () => {
  let service: Experimental915Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental915Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
