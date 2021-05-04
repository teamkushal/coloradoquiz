import { TestBed } from '@angular/core/testing';

import { Experimental2189Service } from './experimental2189.service';

describe('Experimental2189Service', () => {
  let service: Experimental2189Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2189Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
