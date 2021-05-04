import { TestBed } from '@angular/core/testing';

import { Experimental426Service } from './experimental426.service';

describe('Experimental426Service', () => {
  let service: Experimental426Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental426Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
