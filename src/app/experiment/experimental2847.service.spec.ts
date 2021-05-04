import { TestBed } from '@angular/core/testing';

import { Experimental2847Service } from './experimental2847.service';

describe('Experimental2847Service', () => {
  let service: Experimental2847Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2847Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
