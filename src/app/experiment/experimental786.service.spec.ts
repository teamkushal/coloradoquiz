import { TestBed } from '@angular/core/testing';

import { Experimental786Service } from './experimental786.service';

describe('Experimental786Service', () => {
  let service: Experimental786Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental786Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
