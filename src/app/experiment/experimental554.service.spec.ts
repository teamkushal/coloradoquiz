import { TestBed } from '@angular/core/testing';

import { Experimental554Service } from './experimental554.service';

describe('Experimental554Service', () => {
  let service: Experimental554Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental554Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
