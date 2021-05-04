import { TestBed } from '@angular/core/testing';

import { Experimental2829Service } from './experimental2829.service';

describe('Experimental2829Service', () => {
  let service: Experimental2829Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2829Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
