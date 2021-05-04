import { TestBed } from '@angular/core/testing';

import { Experimental431Service } from './experimental431.service';

describe('Experimental431Service', () => {
  let service: Experimental431Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental431Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
