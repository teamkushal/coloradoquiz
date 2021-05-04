import { TestBed } from '@angular/core/testing';

import { Experimental952Service } from './experimental952.service';

describe('Experimental952Service', () => {
  let service: Experimental952Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental952Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
