import { TestBed } from '@angular/core/testing';

import { Experimental2780Service } from './experimental2780.service';

describe('Experimental2780Service', () => {
  let service: Experimental2780Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2780Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
