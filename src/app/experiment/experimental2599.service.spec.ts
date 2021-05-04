import { TestBed } from '@angular/core/testing';

import { Experimental2599Service } from './experimental2599.service';

describe('Experimental2599Service', () => {
  let service: Experimental2599Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2599Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
