import { TestBed } from '@angular/core/testing';

import { Experimental331Service } from './experimental331.service';

describe('Experimental331Service', () => {
  let service: Experimental331Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental331Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
