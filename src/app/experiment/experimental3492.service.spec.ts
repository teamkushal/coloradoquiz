import { TestBed } from '@angular/core/testing';

import { Experimental3492Service } from './experimental3492.service';

describe('Experimental3492Service', () => {
  let service: Experimental3492Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3492Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
