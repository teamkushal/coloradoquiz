import { TestBed } from '@angular/core/testing';

import { Experimental667Service } from './experimental667.service';

describe('Experimental667Service', () => {
  let service: Experimental667Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental667Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
