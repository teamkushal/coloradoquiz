import { TestBed } from '@angular/core/testing';

import { Experimental541Service } from './experimental541.service';

describe('Experimental541Service', () => {
  let service: Experimental541Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental541Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
