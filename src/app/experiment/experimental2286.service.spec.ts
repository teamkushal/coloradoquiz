import { TestBed } from '@angular/core/testing';

import { Experimental2286Service } from './experimental2286.service';

describe('Experimental2286Service', () => {
  let service: Experimental2286Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2286Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
