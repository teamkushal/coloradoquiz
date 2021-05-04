import { TestBed } from '@angular/core/testing';

import { Experimental2330Service } from './experimental2330.service';

describe('Experimental2330Service', () => {
  let service: Experimental2330Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2330Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
