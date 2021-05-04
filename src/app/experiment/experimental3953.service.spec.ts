import { TestBed } from '@angular/core/testing';

import { Experimental3953Service } from './experimental3953.service';

describe('Experimental3953Service', () => {
  let service: Experimental3953Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3953Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
