import { TestBed } from '@angular/core/testing';

import { Experimental419Service } from './experimental419.service';

describe('Experimental419Service', () => {
  let service: Experimental419Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental419Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
