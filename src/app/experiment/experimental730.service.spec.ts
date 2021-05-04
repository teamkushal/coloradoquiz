import { TestBed } from '@angular/core/testing';

import { Experimental730Service } from './experimental730.service';

describe('Experimental730Service', () => {
  let service: Experimental730Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental730Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
