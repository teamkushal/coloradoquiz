import { TestBed } from '@angular/core/testing';

import { Experimental3384Service } from './experimental3384.service';

describe('Experimental3384Service', () => {
  let service: Experimental3384Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3384Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
