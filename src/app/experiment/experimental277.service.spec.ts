import { TestBed } from '@angular/core/testing';

import { Experimental277Service } from './experimental277.service';

describe('Experimental277Service', () => {
  let service: Experimental277Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental277Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
