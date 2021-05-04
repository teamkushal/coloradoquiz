import { TestBed } from '@angular/core/testing';

import { Experimental2979Service } from './experimental2979.service';

describe('Experimental2979Service', () => {
  let service: Experimental2979Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2979Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
