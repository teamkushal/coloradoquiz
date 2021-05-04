import { TestBed } from '@angular/core/testing';

import { Experimental3513Service } from './experimental3513.service';

describe('Experimental3513Service', () => {
  let service: Experimental3513Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3513Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
