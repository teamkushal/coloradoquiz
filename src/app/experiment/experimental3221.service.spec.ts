import { TestBed } from '@angular/core/testing';

import { Experimental3221Service } from './experimental3221.service';

describe('Experimental3221Service', () => {
  let service: Experimental3221Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3221Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
