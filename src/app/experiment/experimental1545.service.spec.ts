import { TestBed } from '@angular/core/testing';

import { Experimental1545Service } from './experimental1545.service';

describe('Experimental1545Service', () => {
  let service: Experimental1545Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1545Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
