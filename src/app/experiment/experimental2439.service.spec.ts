import { TestBed } from '@angular/core/testing';

import { Experimental2439Service } from './experimental2439.service';

describe('Experimental2439Service', () => {
  let service: Experimental2439Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2439Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
