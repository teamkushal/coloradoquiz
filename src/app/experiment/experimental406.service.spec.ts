import { TestBed } from '@angular/core/testing';

import { Experimental406Service } from './experimental406.service';

describe('Experimental406Service', () => {
  let service: Experimental406Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental406Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
