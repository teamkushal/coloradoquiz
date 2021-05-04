import { TestBed } from '@angular/core/testing';

import { Experimental452Service } from './experimental452.service';

describe('Experimental452Service', () => {
  let service: Experimental452Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental452Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
