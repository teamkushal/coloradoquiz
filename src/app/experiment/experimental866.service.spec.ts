import { TestBed } from '@angular/core/testing';

import { Experimental866Service } from './experimental866.service';

describe('Experimental866Service', () => {
  let service: Experimental866Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental866Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
