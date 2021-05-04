import { TestBed } from '@angular/core/testing';

import { Experimental86Service } from './experimental86.service';

describe('Experimental86Service', () => {
  let service: Experimental86Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental86Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
