import { TestBed } from '@angular/core/testing';

import { Experimental2128Service } from './experimental2128.service';

describe('Experimental2128Service', () => {
  let service: Experimental2128Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2128Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
