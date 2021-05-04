import { TestBed } from '@angular/core/testing';

import { Experimental924Service } from './experimental924.service';

describe('Experimental924Service', () => {
  let service: Experimental924Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental924Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
