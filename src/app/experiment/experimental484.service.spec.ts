import { TestBed } from '@angular/core/testing';

import { Experimental484Service } from './experimental484.service';

describe('Experimental484Service', () => {
  let service: Experimental484Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental484Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
