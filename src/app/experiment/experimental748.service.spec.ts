import { TestBed } from '@angular/core/testing';

import { Experimental748Service } from './experimental748.service';

describe('Experimental748Service', () => {
  let service: Experimental748Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental748Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
