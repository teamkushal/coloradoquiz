import { TestBed } from '@angular/core/testing';

import { Experimental504Service } from './experimental504.service';

describe('Experimental504Service', () => {
  let service: Experimental504Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental504Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
