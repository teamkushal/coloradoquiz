import { TestBed } from '@angular/core/testing';

import { Experimental693Service } from './experimental693.service';

describe('Experimental693Service', () => {
  let service: Experimental693Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental693Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
