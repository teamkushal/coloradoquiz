import { TestBed } from '@angular/core/testing';

import { Experimental888Service } from './experimental888.service';

describe('Experimental888Service', () => {
  let service: Experimental888Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental888Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
