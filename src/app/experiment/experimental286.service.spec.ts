import { TestBed } from '@angular/core/testing';

import { Experimental286Service } from './experimental286.service';

describe('Experimental286Service', () => {
  let service: Experimental286Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental286Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
