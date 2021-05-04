import { TestBed } from '@angular/core/testing';

import { Experimental342Service } from './experimental342.service';

describe('Experimental342Service', () => {
  let service: Experimental342Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental342Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
