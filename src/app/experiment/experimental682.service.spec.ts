import { TestBed } from '@angular/core/testing';

import { Experimental682Service } from './experimental682.service';

describe('Experimental682Service', () => {
  let service: Experimental682Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental682Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
