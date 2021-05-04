import { TestBed } from '@angular/core/testing';

import { Experimental3995Service } from './experimental3995.service';

describe('Experimental3995Service', () => {
  let service: Experimental3995Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3995Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
