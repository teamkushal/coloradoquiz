import { TestBed } from '@angular/core/testing';

import { Experimental229Service } from './experimental229.service';

describe('Experimental229Service', () => {
  let service: Experimental229Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental229Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
