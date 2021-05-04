import { TestBed } from '@angular/core/testing';

import { Experimental122Service } from './experimental122.service';

describe('Experimental122Service', () => {
  let service: Experimental122Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental122Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
