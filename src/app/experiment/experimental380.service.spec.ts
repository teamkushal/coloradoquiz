import { TestBed } from '@angular/core/testing';

import { Experimental380Service } from './experimental380.service';

describe('Experimental380Service', () => {
  let service: Experimental380Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental380Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
