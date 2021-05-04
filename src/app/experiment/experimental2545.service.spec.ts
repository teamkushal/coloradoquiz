import { TestBed } from '@angular/core/testing';

import { Experimental2545Service } from './experimental2545.service';

describe('Experimental2545Service', () => {
  let service: Experimental2545Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2545Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
