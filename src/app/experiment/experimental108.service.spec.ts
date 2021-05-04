import { TestBed } from '@angular/core/testing';

import { Experimental108Service } from './experimental108.service';

describe('Experimental108Service', () => {
  let service: Experimental108Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental108Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
