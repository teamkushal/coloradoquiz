import { TestBed } from '@angular/core/testing';

import { Experimental511Service } from './experimental511.service';

describe('Experimental511Service', () => {
  let service: Experimental511Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental511Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
