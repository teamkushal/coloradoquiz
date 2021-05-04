import { TestBed } from '@angular/core/testing';

import { Experimental1776Service } from './experimental1776.service';

describe('Experimental1776Service', () => {
  let service: Experimental1776Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1776Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
