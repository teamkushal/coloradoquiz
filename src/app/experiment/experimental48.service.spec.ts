import { TestBed } from '@angular/core/testing';

import { Experimental48Service } from './experimental48.service';

describe('Experimental48Service', () => {
  let service: Experimental48Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental48Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
