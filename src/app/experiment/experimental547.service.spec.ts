import { TestBed } from '@angular/core/testing';

import { Experimental547Service } from './experimental547.service';

describe('Experimental547Service', () => {
  let service: Experimental547Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental547Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
