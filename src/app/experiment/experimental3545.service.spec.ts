import { TestBed } from '@angular/core/testing';

import { Experimental3545Service } from './experimental3545.service';

describe('Experimental3545Service', () => {
  let service: Experimental3545Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3545Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
