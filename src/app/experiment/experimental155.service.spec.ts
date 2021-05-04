import { TestBed } from '@angular/core/testing';

import { Experimental155Service } from './experimental155.service';

describe('Experimental155Service', () => {
  let service: Experimental155Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental155Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
