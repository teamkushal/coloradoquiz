import { TestBed } from '@angular/core/testing';

import { Experimental940Service } from './experimental940.service';

describe('Experimental940Service', () => {
  let service: Experimental940Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental940Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
