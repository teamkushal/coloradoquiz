import { TestBed } from '@angular/core/testing';

import { Experimental289Service } from './experimental289.service';

describe('Experimental289Service', () => {
  let service: Experimental289Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental289Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
