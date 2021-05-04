import { TestBed } from '@angular/core/testing';

import { Experimental904Service } from './experimental904.service';

describe('Experimental904Service', () => {
  let service: Experimental904Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental904Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
