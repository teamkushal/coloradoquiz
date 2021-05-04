import { TestBed } from '@angular/core/testing';

import { Experimental305Service } from './experimental305.service';

describe('Experimental305Service', () => {
  let service: Experimental305Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental305Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
