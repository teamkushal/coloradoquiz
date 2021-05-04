import { TestBed } from '@angular/core/testing';

import { Experimental2513Service } from './experimental2513.service';

describe('Experimental2513Service', () => {
  let service: Experimental2513Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2513Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
