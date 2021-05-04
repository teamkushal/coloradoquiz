import { TestBed } from '@angular/core/testing';

import { Experimental227Service } from './experimental227.service';

describe('Experimental227Service', () => {
  let service: Experimental227Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental227Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
