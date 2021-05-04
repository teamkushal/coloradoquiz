import { TestBed } from '@angular/core/testing';

import { Experimental384Service } from './experimental384.service';

describe('Experimental384Service', () => {
  let service: Experimental384Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental384Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
