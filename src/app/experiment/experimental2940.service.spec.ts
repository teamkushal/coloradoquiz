import { TestBed } from '@angular/core/testing';

import { Experimental2940Service } from './experimental2940.service';

describe('Experimental2940Service', () => {
  let service: Experimental2940Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2940Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
