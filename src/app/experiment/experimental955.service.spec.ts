import { TestBed } from '@angular/core/testing';

import { Experimental955Service } from './experimental955.service';

describe('Experimental955Service', () => {
  let service: Experimental955Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental955Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
