import { TestBed } from '@angular/core/testing';

import { Experimental468Service } from './experimental468.service';

describe('Experimental468Service', () => {
  let service: Experimental468Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental468Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
