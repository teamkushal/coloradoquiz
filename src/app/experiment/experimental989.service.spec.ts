import { TestBed } from '@angular/core/testing';

import { Experimental989Service } from './experimental989.service';

describe('Experimental989Service', () => {
  let service: Experimental989Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental989Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
