import { TestBed } from '@angular/core/testing';

import { Experimental3572Service } from './experimental3572.service';

describe('Experimental3572Service', () => {
  let service: Experimental3572Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3572Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
