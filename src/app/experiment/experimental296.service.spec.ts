import { TestBed } from '@angular/core/testing';

import { Experimental296Service } from './experimental296.service';

describe('Experimental296Service', () => {
  let service: Experimental296Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental296Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
