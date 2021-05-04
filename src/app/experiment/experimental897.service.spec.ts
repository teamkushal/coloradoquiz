import { TestBed } from '@angular/core/testing';

import { Experimental897Service } from './experimental897.service';

describe('Experimental897Service', () => {
  let service: Experimental897Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental897Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
