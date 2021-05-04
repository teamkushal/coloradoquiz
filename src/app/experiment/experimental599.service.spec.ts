import { TestBed } from '@angular/core/testing';

import { Experimental599Service } from './experimental599.service';

describe('Experimental599Service', () => {
  let service: Experimental599Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental599Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
