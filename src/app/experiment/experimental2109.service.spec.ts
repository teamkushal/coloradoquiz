import { TestBed } from '@angular/core/testing';

import { Experimental2109Service } from './experimental2109.service';

describe('Experimental2109Service', () => {
  let service: Experimental2109Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2109Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
