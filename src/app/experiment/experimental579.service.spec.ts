import { TestBed } from '@angular/core/testing';

import { Experimental579Service } from './experimental579.service';

describe('Experimental579Service', () => {
  let service: Experimental579Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental579Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
