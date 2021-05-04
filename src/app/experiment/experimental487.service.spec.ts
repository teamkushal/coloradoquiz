import { TestBed } from '@angular/core/testing';

import { Experimental487Service } from './experimental487.service';

describe('Experimental487Service', () => {
  let service: Experimental487Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental487Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
