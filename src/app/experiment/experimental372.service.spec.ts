import { TestBed } from '@angular/core/testing';

import { Experimental372Service } from './experimental372.service';

describe('Experimental372Service', () => {
  let service: Experimental372Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental372Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
