import { TestBed } from '@angular/core/testing';

import { Experimental806Service } from './experimental806.service';

describe('Experimental806Service', () => {
  let service: Experimental806Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental806Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
