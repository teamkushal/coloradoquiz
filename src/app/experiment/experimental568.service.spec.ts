import { TestBed } from '@angular/core/testing';

import { Experimental568Service } from './experimental568.service';

describe('Experimental568Service', () => {
  let service: Experimental568Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental568Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
