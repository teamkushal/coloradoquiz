import { TestBed } from '@angular/core/testing';

import { Experimental552Service } from './experimental552.service';

describe('Experimental552Service', () => {
  let service: Experimental552Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental552Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
