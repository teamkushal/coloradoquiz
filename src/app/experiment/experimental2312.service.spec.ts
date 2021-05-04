import { TestBed } from '@angular/core/testing';

import { Experimental2312Service } from './experimental2312.service';

describe('Experimental2312Service', () => {
  let service: Experimental2312Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2312Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
