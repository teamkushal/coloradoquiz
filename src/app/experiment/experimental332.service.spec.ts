import { TestBed } from '@angular/core/testing';

import { Experimental332Service } from './experimental332.service';

describe('Experimental332Service', () => {
  let service: Experimental332Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental332Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
