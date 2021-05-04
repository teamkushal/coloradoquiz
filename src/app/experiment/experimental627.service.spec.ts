import { TestBed } from '@angular/core/testing';

import { Experimental627Service } from './experimental627.service';

describe('Experimental627Service', () => {
  let service: Experimental627Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental627Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
