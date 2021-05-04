import { TestBed } from '@angular/core/testing';

import { Experimental402Service } from './experimental402.service';

describe('Experimental402Service', () => {
  let service: Experimental402Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental402Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
