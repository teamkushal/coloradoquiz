import { TestBed } from '@angular/core/testing';

import { Experimental660Service } from './experimental660.service';

describe('Experimental660Service', () => {
  let service: Experimental660Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental660Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
