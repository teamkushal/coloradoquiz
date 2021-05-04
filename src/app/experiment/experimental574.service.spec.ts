import { TestBed } from '@angular/core/testing';

import { Experimental574Service } from './experimental574.service';

describe('Experimental574Service', () => {
  let service: Experimental574Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental574Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
