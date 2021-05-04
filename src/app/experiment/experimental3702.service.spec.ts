import { TestBed } from '@angular/core/testing';

import { Experimental3702Service } from './experimental3702.service';

describe('Experimental3702Service', () => {
  let service: Experimental3702Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3702Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
