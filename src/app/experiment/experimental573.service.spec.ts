import { TestBed } from '@angular/core/testing';

import { Experimental573Service } from './experimental573.service';

describe('Experimental573Service', () => {
  let service: Experimental573Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental573Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
