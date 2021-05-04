import { TestBed } from '@angular/core/testing';

import { Experimental341Service } from './experimental341.service';

describe('Experimental341Service', () => {
  let service: Experimental341Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental341Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
