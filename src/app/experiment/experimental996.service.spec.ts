import { TestBed } from '@angular/core/testing';

import { Experimental996Service } from './experimental996.service';

describe('Experimental996Service', () => {
  let service: Experimental996Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental996Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
