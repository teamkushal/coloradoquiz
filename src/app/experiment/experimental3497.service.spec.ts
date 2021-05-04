import { TestBed } from '@angular/core/testing';

import { Experimental3497Service } from './experimental3497.service';

describe('Experimental3497Service', () => {
  let service: Experimental3497Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3497Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
