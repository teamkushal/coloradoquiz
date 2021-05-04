import { TestBed } from '@angular/core/testing';

import { Experimental612Service } from './experimental612.service';

describe('Experimental612Service', () => {
  let service: Experimental612Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental612Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
