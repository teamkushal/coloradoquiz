import { TestBed } from '@angular/core/testing';

import { Experimental454Service } from './experimental454.service';

describe('Experimental454Service', () => {
  let service: Experimental454Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental454Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
