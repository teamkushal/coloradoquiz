import { TestBed } from '@angular/core/testing';

import { Experimental2917Service } from './experimental2917.service';

describe('Experimental2917Service', () => {
  let service: Experimental2917Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2917Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
