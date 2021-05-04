import { TestBed } from '@angular/core/testing';

import { Experimental569Service } from './experimental569.service';

describe('Experimental569Service', () => {
  let service: Experimental569Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental569Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
