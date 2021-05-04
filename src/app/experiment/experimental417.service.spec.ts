import { TestBed } from '@angular/core/testing';

import { Experimental417Service } from './experimental417.service';

describe('Experimental417Service', () => {
  let service: Experimental417Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental417Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
