import { TestBed } from '@angular/core/testing';

import { Experimental959Service } from './experimental959.service';

describe('Experimental959Service', () => {
  let service: Experimental959Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental959Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
