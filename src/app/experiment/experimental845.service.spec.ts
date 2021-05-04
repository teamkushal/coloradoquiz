import { TestBed } from '@angular/core/testing';

import { Experimental845Service } from './experimental845.service';

describe('Experimental845Service', () => {
  let service: Experimental845Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental845Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
