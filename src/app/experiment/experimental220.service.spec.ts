import { TestBed } from '@angular/core/testing';

import { Experimental220Service } from './experimental220.service';

describe('Experimental220Service', () => {
  let service: Experimental220Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental220Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
