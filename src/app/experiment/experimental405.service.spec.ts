import { TestBed } from '@angular/core/testing';

import { Experimental405Service } from './experimental405.service';

describe('Experimental405Service', () => {
  let service: Experimental405Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental405Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
