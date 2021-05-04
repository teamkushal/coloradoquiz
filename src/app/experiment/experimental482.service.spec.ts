import { TestBed } from '@angular/core/testing';

import { Experimental482Service } from './experimental482.service';

describe('Experimental482Service', () => {
  let service: Experimental482Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental482Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
