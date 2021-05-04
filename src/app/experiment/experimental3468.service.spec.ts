import { TestBed } from '@angular/core/testing';

import { Experimental3468Service } from './experimental3468.service';

describe('Experimental3468Service', () => {
  let service: Experimental3468Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3468Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
