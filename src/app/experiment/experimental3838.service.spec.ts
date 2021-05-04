import { TestBed } from '@angular/core/testing';

import { Experimental3838Service } from './experimental3838.service';

describe('Experimental3838Service', () => {
  let service: Experimental3838Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3838Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
