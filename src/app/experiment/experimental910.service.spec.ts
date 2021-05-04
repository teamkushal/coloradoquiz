import { TestBed } from '@angular/core/testing';

import { Experimental910Service } from './experimental910.service';

describe('Experimental910Service', () => {
  let service: Experimental910Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental910Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
