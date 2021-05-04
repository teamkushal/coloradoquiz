import { TestBed } from '@angular/core/testing';

import { Experimental44Service } from './experimental44.service';

describe('Experimental44Service', () => {
  let service: Experimental44Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental44Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
