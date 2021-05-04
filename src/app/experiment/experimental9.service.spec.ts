import { TestBed } from '@angular/core/testing';

import { Experimental9Service } from './experimental9.service';

describe('Experimental9Service', () => {
  let service: Experimental9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
