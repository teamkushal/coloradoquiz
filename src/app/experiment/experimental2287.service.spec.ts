import { TestBed } from '@angular/core/testing';

import { Experimental2287Service } from './experimental2287.service';

describe('Experimental2287Service', () => {
  let service: Experimental2287Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2287Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
