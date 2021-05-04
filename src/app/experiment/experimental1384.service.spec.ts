import { TestBed } from '@angular/core/testing';

import { Experimental1384Service } from './experimental1384.service';

describe('Experimental1384Service', () => {
  let service: Experimental1384Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1384Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
