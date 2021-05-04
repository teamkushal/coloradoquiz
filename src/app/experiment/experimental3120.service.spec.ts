import { TestBed } from '@angular/core/testing';

import { Experimental3120Service } from './experimental3120.service';

describe('Experimental3120Service', () => {
  let service: Experimental3120Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3120Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
