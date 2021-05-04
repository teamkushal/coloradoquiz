import { TestBed } from '@angular/core/testing';

import { Experimental261Service } from './experimental261.service';

describe('Experimental261Service', () => {
  let service: Experimental261Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental261Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
