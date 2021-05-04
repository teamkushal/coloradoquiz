import { TestBed } from '@angular/core/testing';

import { Experimental884Service } from './experimental884.service';

describe('Experimental884Service', () => {
  let service: Experimental884Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental884Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
