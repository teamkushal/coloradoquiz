import { TestBed } from '@angular/core/testing';

import { Experimental2641Service } from './experimental2641.service';

describe('Experimental2641Service', () => {
  let service: Experimental2641Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2641Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
