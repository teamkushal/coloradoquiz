import { TestBed } from '@angular/core/testing';

import { Experimental232Service } from './experimental232.service';

describe('Experimental232Service', () => {
  let service: Experimental232Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental232Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
