import { TestBed } from '@angular/core/testing';

import { Experimental658Service } from './experimental658.service';

describe('Experimental658Service', () => {
  let service: Experimental658Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental658Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
