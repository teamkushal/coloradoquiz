import { TestBed } from '@angular/core/testing';

import { Experimental2927Service } from './experimental2927.service';

describe('Experimental2927Service', () => {
  let service: Experimental2927Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2927Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
