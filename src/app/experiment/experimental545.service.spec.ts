import { TestBed } from '@angular/core/testing';

import { Experimental545Service } from './experimental545.service';

describe('Experimental545Service', () => {
  let service: Experimental545Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental545Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
