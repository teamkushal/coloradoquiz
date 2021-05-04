import { TestBed } from '@angular/core/testing';

import { Experimental2089Service } from './experimental2089.service';

describe('Experimental2089Service', () => {
  let service: Experimental2089Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2089Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
