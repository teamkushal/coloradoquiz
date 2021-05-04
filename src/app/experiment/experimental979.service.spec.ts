import { TestBed } from '@angular/core/testing';

import { Experimental979Service } from './experimental979.service';

describe('Experimental979Service', () => {
  let service: Experimental979Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental979Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
