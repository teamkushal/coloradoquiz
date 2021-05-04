import { TestBed } from '@angular/core/testing';

import { Experimental263Service } from './experimental263.service';

describe('Experimental263Service', () => {
  let service: Experimental263Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental263Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
