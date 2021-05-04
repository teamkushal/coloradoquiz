import { TestBed } from '@angular/core/testing';

import { Experimental743Service } from './experimental743.service';

describe('Experimental743Service', () => {
  let service: Experimental743Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental743Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
