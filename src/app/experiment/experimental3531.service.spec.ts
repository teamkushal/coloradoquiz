import { TestBed } from '@angular/core/testing';

import { Experimental3531Service } from './experimental3531.service';

describe('Experimental3531Service', () => {
  let service: Experimental3531Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3531Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
