import { TestBed } from '@angular/core/testing';

import { Experimental104Service } from './experimental104.service';

describe('Experimental104Service', () => {
  let service: Experimental104Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental104Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
