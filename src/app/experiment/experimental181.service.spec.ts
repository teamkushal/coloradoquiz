import { TestBed } from '@angular/core/testing';

import { Experimental181Service } from './experimental181.service';

describe('Experimental181Service', () => {
  let service: Experimental181Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental181Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
