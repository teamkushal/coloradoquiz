import { TestBed } from '@angular/core/testing';

import { Experimental3322Service } from './experimental3322.service';

describe('Experimental3322Service', () => {
  let service: Experimental3322Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3322Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
