import { TestBed } from '@angular/core/testing';

import { Experimental409Service } from './experimental409.service';

describe('Experimental409Service', () => {
  let service: Experimental409Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental409Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
